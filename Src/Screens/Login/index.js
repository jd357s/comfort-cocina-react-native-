import React,{ Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert,AsyncStorage } from 'react-native'
import style from './style'

import Txt from '../../Components/text/index';
import Txtinput from '../../Components/input/index';
// import Img from '../../Components/image/index';
import Buttn from '../../Components/touch/index'
import {LOGIN_URL} from '../../Screens/Config/Global';
import Loader from '../../Components/Loader';

console.disableYellowBox = true;
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            UserEmail:'',
            UserPasswrd:'',
            userId:'',
            userName:'',
            userRole:'',
            isLoading:0

        }
    }
    static navigationOptions = ({
        title: 'Sign In',

        headerLeft: null,
        headerRight: <TouchableOpacity><Image source={require('../../Assets/Loginimage/detail.png')} resizeMode='contain' style={{ height: 20, width: 20, marginRight: 10 }}></Image></TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            textAlign: 'center',
            fontWeight: '500'
        },
    });
    createAcMethod() {
        // Alert.alert('Welcome')
        this.props.navigation.navigate('SignUpScreen')
    }

    EmailMethod(value)
    {
        this.setState({
            UserEmail:value
        })
    }

PasswrdMethod(value)
{
    this.setState({
        UserPasswrd:value
    })
}


    componentDidMount(){
        // this.LoginMethod();
    }
    
    LoginMethod(){
    
   if(this.state.UserEmail =='')
   {
       Alert.alert('Please enter the Email Address')
   }
    else if (this.state.UserPasswrd =='')
    {
        Alert.alert('Please enter the Password')
    }
    this.setState({isLoading: 1})
        var details = {

        'user_login':this.state.UserEmail,
        'user_pass':this.state.UserPasswrd,
        
        };
        var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
        'Content-Type':'application/x-www-form-urlencoded'
        },
        body: formBody
        })
        .then((response) => response.json()
        )
        
        .then((serviceResponse) => {
            this.setState({
                userId:serviceResponse.userId,
                userName:serviceResponse.user_name,
                userRole:serviceResponse.role
            })
            AsyncStorage.setItem('userlogin' ,(this.state.userId));
            AsyncStorage.setItem('userNameCocina' ,(this.state.userName));
            AsyncStorage.setItem('userRoleCocina' ,(this.state.userRole));
            if(serviceResponse.success==1){               
              this.props.navigation.navigate('Home')
            }
            else{
                  this.setItem({isLoading: 0 })
                  Alert.alert('Please enter valid email and password')
            }
        })
        .catch((error) => console.log(error));
       
     }
    

render() {
    const {isLoading} = this.state;
        return (
            <View style={style.splashmainview}>

                <ImageBackground
                    resizeMode='stretch'
                    style={style.backGroundImageStyle}
                    source={require('../../Assets/Loginimage/loginsplash.png')} >
                    <View style={style.imageviewStyle} >
                        <Image
                            resizeMode='contain'
                            source={require('../../Assets/SplashImage/splashlogo1.png')}
                            style={style.imageStyle}
                        >
                        </Image>

                    </View>
                    <View style={{ flex: 0.37, marginLeft: 40, borderColor: '#dcdcdc', borderBottomWidth: 1, marginRight: 40,paddingBottom:20 }}>
                        <Txt title='Email' color='#b5803b' fontSize={12}></Txt>
                        <Txtinput borderColor='#b5803b'
                        onChangeText={(txt)=>this.EmailMethod(txt)}
                            borderWidth={1}
                            height={35}
                            borderRadius={5}
                            marginTop={5}
                            marginBottom={5}
                            placeholder=''
                            value={this.state.UserEmail}
                        >
                        </Txtinput>

                        <Txt title='Password' color='#b5803b' fontSize={12} ></Txt>
                        <Txtinput borderColor='#b5803b'
                        onChangeText={(txt)=>this.PasswrdMethod(txt)}

                            borderWidth={1}
                            height={35}
                            borderRadius={5}
                            marginTop={5}
                            secureTextEntry={true}
                            placeholder=''
                            value={this.state.UserPasswrd}
                        >
                        </Txtinput>
                        <View style={{ alignItems: 'flex-end', marginTop: 7, marginBottom: 7 }}>
                            <Buttn title='forgot password?' textDecorationLineText='underline' color1='#c69293' fontSize={10}></Buttn>
                        </View>
                        <Buttn title="Sign In"
                            height={30} justifyContent='center' backgroundColor='#b5803b'
                            alignSelf='center' color1='white'
                            borderRadius={2}
                            onPress={()=> this.LoginMethod()}
                        ></Buttn>
                    </View>
                    <View style={{ flex: 0.21, borderColor: '#dcdcdc', borderBottomWidth: 1, marginRight: 47, marginLeft: 47 }}>
                        <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                            <Buttn title="Sign in with Facebook"
                                height={30} backgroundColor='#841314'
                                color1='white' alignItems='center' justifyContent='center'
                                borderRadius={2}
                            ></Buttn>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                            <Buttn
                                title='Sign in with Google' backgroundColor='#841314'
                                height={30} justifyContent='center'
                                color1='white' alignItems='center'
                                borderRadius={2}
                            ></Buttn>
                        </View>
                    </View>
                    {/* <Buttn title='Create An Account' color1='#830000' fontSize={10}></Buttn> */}

                    <View style={{ top: 10, flexDirection: 'row', marginLeft: 50, borderColor: '#830000', borderBottomWidth: 1, marginRight: 47, marginLeft: 47 }}>

                        <View style={{marginLeft:5}} >
                            <Txt title='New to Comfort Cocina?'  fontSize={16}></Txt>
                        </View>
                        <View style={{marginLeft:5}} >
                            <Buttn onPress={() => this.createAcMethod()} title='Create An Account' color1='#830000' fontSize={16}></Buttn>
                        </View>
                    </View>
                    {isLoading ? <Loader/> : <Text/>}
                </ImageBackground>



            </View>
        );
    }
}