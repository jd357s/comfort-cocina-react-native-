import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput,Alert,AsyncStorage } from 'react-native'
import Style from './style'
import CheckBox from 'react-native-checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../../Components/touch/index'
import {SIGNUP_URL} from '../Config/Global'
console.disableYellowBox = true;
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname:'',
            firstname:'',
            Mobile_no:'',
            email:'',
            password:'',
            confrim_password:'',
            visible:true,
            userId:'',
            userName:''
        }
    }
    static navigationOptions = ({
        title: 'Create Account',
        headerLeft: null,
        headerRight: <TouchableOpacity><Image source={require('../../Assets/Loginimage/detail.png')} resizeMode='contain' style={{ height: 20, width: 20, marginRight: 10 }}></Image></TouchableOpacity>,
        headerLeft: <TouchableOpacity  ><Image source={require('../../Assets/SignUpImage/leftarrow.png')} style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#841314',
            flex: 0.5
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,
            width: '100%',
            textAlign: 'center',
            fontWeight: '400'
        },
    });

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }


SignUpMethod() {
        if(this.state.firstname=='')
        {
           Alert.alert('Please enter the first name')
        }
        else if(this.state.lastname=='')
        {
            Alert.alert('Please enter the Last name')
        }
        else if(this.state.email=='')
        {
            Alert.alert('Please enter the Email Address')
        }
        else if(this.state.Mobile_no=="")
        {
            Alert.alert('Please enter the Mobile Number')
        }
        else if (this.state.confrim_password=='')
        {
            Alert.alert('Password not Confirmed')
        }

    var details = {
    'first_name': this.state.firstname,
    'last_name':this.state.lastname,
    'user_phone': this.state.Mobile_no,
    'user_email':this.state.email,
    'user_pass': this.state.password
    };
  
    var formBody = [];
    for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(SIGNUP_URL, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
    }).then((serviceResponse) => {
        serviceResponse = serviceResponse.json();
//         this.setState({
//             userId:serviceResponse.userid,
//             userName:serviceResponse.user_name,
//             userRole:serviceResponse.role
//   })
       
        const value = AsyncStorage.setItem('userlogin' ,(serviceResponse.userid));
        // const valueUserName = AsyncStorage.setItem('userName' ,(serviceResponse.user_name));
        // const valueUserRole = AsyncStorage.setItem('userRole' ,(serviceResponse.role));
        if(serviceResponse.success=1){
            alert('SignUp Succesfully')
           // Alert.alert(JSON.stringify(serviceResponse[0]))
           this.state.role ? this.props.navigation.navigate('ChefRegistration') :
            this.props.navigation.navigate('Home')
        }
        else{
             alert('Please enter valid email and address')
        }
    })
    .catch((error) => console.log(error));
    }

   render() {
        return (
       <KeyboardAwareScrollView>
           <View style={Style.splashmainview}>
                <View style={{marginBottom:5}}>
                <ImageBackground
                    resizeMode='stretch'
                    style={Style.backGroundImageStyle}
                    source={require('../../Assets/Loginimage/loginsplash.png')} >
                    <View style={Style.imageviewStyle} >
                        <Image
                            resizeMode='contain'
                            source={require('../../Assets/SplashImage/splashlogo1.png')}
                            style={Style.imageStyle}
                        >
                     </Image>
                    </View>
                    <View style={{ flex: 0.8, top: 10, marginLeft: 20, marginRight: 20 }}>
                        <View style={{ flex: 0.19, justifyContent: 'center', marginBottom: 8 }}>
                            <TextInput
                               onChangeText={val => this.onChangeText('firstname', val)}
                               //onChangeText={(txt)=>this.FirstnameMethod(txt)}
                                style={Style.TxtinptStyle}
                                placeholder='First Name'
                                placeholderTextColor='#b5803b'
                                padding={10}
                                keyboardType='name-phone-pad'
                                value={this.state.firstname}
                            >
                            </TextInput>
                        </View>


                        <View style={{ flex: 0.19, justifyContent: 'center', marginBottom: 7 }}>

                            <TextInput
                        onChangeText={val => this.onChangeText('lastname', val)}
                                value={this.state.lastname}
                                style={Style.TxtinptStyle}
                                placeholder='Last Name (Optional)'
                                placeholderTextColor='#b5803b'
                            >
                            </TextInput>
                        </View>
                        <View style={{ flex: 0.19, justifyContent: 'center', marginBottom: 8 }}>

                            <TextInput
                 onChangeText={val => this.onChangeText('Mobile_no', val)}
                                value={this.state.Mobile_no}
                                style={Style.TxtinptStyle}
                                placeholder='+1  Mobile'
                                placeholderTextColor='#b5803b'
                                keyboardType="number-pad"
                            >
                            </TextInput>
                        </View>
                        <View style={{ flex: 0.19, justifyContent: 'center', marginBottom: 8 }}>

                            <TextInput
                                 onChangeText={val => this.onChangeText('email', val)}
                                value={this.state.email}
                                style={Style.TxtinptStyle}
                                placeholder='Email'
                                placeholderTextColor='#b5803b'
                                keyboardType='email-address'
                            >
                            </TextInput>
                        </View>
                        <TextInput
                        onChangeText={val => this.onChangeText('password', val)}
                            style={{
                                borderColor: '#b5803b',
                                borderWidth: 1,
                                // flex: .042,
                                height: 33,
                                borderRadius: 5,
                                paddingHorizontal: 20,
                                // marginBottom: 6,
                                marginLeft: 15,
                                marginRight: 15,
                                // alignSelf: 'center',
                                fontSize: 12,
                            }}
                            placeholder='Password'
                            placeholderTextColor='#b5803b'
                            secureTextEntry={true}
                            value={this.state.password}
                        >
                        </TextInput>
                        <View style={{height:12}}>

                        {this.state.password.length<8 ?
                        <Text style={{ fontSize: 8.5, color: '#b5803b', marginLeft: 15}}> *minimum 8 characters, at least (1) uppercase, and (1) number</Text> : null }</View>

                        <TextInput
                            onChangeText={val => this.onChangeText('confrim_password', val)} 
                            value={this.state.confrim_password}
                            style={Style.TxtinptStyle}
                            placeholder=' Confirm Password'
                            placeholderTextColor='#b5803b'
                            secureTextEntry={true}

                        >
                        </TextInput>
                        <View style={{ flexDirection: 'row', marginLeft: 15, top: 10 }}>
                            <CheckBox
                                containerStyle={{height:5,width:5,top:10,marginRight:20,}}
                                label=''
                                style={{backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5,
                                borderWidth: 2, margin: 10}}
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })} />
                            {/* <Image source={require('../../Assets/SignUpImage/checkbox.png') } style={{height:20,width:20}}></Image> */}
                            <Text style={{ color: '#830000', fontSize: 12, marginLeft:5 }}>I accept the</Text>
                            <Text style={{ textDecorationLine: "underline", color: '#830000', marginLeft: 1, fontSize: 12 }}>Terms & Conditions</Text>
                        </View>
                     
                    </View>
                </ImageBackground>
                </View>
                <View style={{ justifyContent: 'center', backgroundColor: 'white' }}>
                    <Button title="Sign Up"
                    onPress={()=>this.SignUpMethod()}
                        marginTop={1}
                        marginLeft={20}
                        marginRight={20}
                        height={30} justifyContent='center' backgroundColor='#b5803b'
                        alignSelf='center' color1='white'
                        borderRadius={2}
                    ></Button>
                </View>



            </View>
            </KeyboardAwareScrollView>
        );
    }
}