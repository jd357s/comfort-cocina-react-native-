import React,{Component} from 'react'
import {View,TextInput,Text,ScrollView,TouchableOpacity,Image,AsyncStorage,Alert, ActivityIndicator} from 'react-native';
import Txt from '../../Components/text/index';
import Style from './Myprofilestyle'
import {CHEF_REGISTER} from '../../Screens/Config/Global';
import Loader from '../../Components/Loader';

export default class UpdateChefName extends Component{

constructor(props)
    {
        super(props)
        {
          const {params}= this.props.navigation.state;
          let fname = params.Data.first_name;
            this.state={
                firstname: fname,
                isLoading: 0
            }
        }
  }

  static navigationOptions = ({
        title: 'My Profile',
        // headerLeft: <TouchableOpacity  ><Image source={require('../../Assets/SignUpImage/leftarrow.png')} style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>,
        headerRight:'',
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '70%',
            textAlign: 'center',
            fontWeight: '500'
        },
    });
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    componentWillUnmount(){
        const {params}= this.props.navigation.state;
        params.callChef();
    }

async myProfileUpdate(){
        this.setState({isLoading: 1})
        const value = await AsyncStorage.getItem('userlogin');
        var details = {
          'userId':value,
          'first_name':this.state.firstname,
         };
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&")
         
         fetch(CHEF_REGISTER, {
         method: 'POST',
         headers: {
         'Content-Type':'application/x-www-form-urlencoded'
         },
         body: formBody
         })
         .then((response) => response.json()
         )
         
         .then((serviceResponse) => {
            this.setState({isLoading: 0})
           // Alert.alert(JSON.stringify(serviceResponse));
             if(serviceResponse.success==1){
                 alert('Updated Succesfully')
                 this.props.navigation.navigate('ChefRegistration',{
                     first_name:this.state.firstname,
                 })
                  
             }
             else{
                 //  alert('Please enter valid email and address')
             }
           })
         .catch((error) => console.log(error));
        }
     
    render()
      {
       const {firstname, isLoading} = this.state; 
        return(
            <View style={Style.mainView}>
            <View style={Style.PersonalInfoView}>
            <Text style={Style.PersonalInfoTxtStyle}>Personal Info</Text>
            </View>
            <ScrollView style={{flex:.9}}>
            <View style={{flex:.9,marginLeft:20,marginRight:20}}>
                <Text style={{color:'#b5803b'}}>Legal Name</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                 onChangeText={val => this.onChangeText('firstname', val)}
                 value = {firstname}
                >
                </TextInput>
                </View>
            </ScrollView>
            <View style={{flex:.1}}>
                    <TouchableOpacity onPress={()=>this.myProfileUpdate()} 
                    style={Style.touchStyle}><Text style={{color:'white',textAlign:'center'}}>Update</Text></TouchableOpacity>
                </View>
                {isLoading ? <Loader/> : <Text/>}
            </View>
            );
    }
}