import React,{Component} from 'react'
import {View,TextInput,ActivityIndicator,Text,ScrollView,TouchableOpacity,Image,AsyncStorage,Alert} from 'react-native';
import Txt from '../../Components/text/index';
import Style from './Myprofilestyle'
import {MYPROFILE_URL} from '../../Screens/Config/Global';
import {GETUSERPROFILE} from '../../Screens/Config/Global';


export default class Myprofile extends Component{

    constructor(props)
    {
        super(props)
        {
            this.state={
                firstname:'',
                lastname:'',
                Email:'',
                PhoneNumber:'',
                Password:'',
                HomeAddress:'',
                HomeApartNo:'',
                City:'',
                data:{}
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

  componentDidMount(){
    // this.myProfileUpdate();
  
  } 

  componentWillMount(){
    this.getMyProfile();
  }

//Get my profile api method -
 async getMyProfile(){
    <ActivityIndicator style = {{flex: 1,
        justifyContent: 'center'}}
    size="large" color="#0000ff" />
    const useridValue = await AsyncStorage.getItem('userlogin');
    var details = {
        'userId':useridValue,
       };
       var formBody = [];
       for (var property in details) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(details[property]);
       formBody.push(encodedKey + "=" + encodedValue);
       }
       formBody = formBody.join("&");
       fetch(GETUSERPROFILE, {
       method: 'POST',
       headers: {
       'Content-Type':'application/x-www-form-urlencoded'
       },
       body: formBody
       })
       .then((response) => response.json()
       )
       
       .then((serviceResponse) => {
          Alert.alert(JSON.stringify(serviceResponse));
           if(serviceResponse.success==1){
            this.setState({
                'firstname':serviceResponse.data.billing_first_name, 
                'lastname': serviceResponse.data.billing_last_name,
                'Email': serviceResponse.data.billing_email,
                'PhoneNumber': serviceResponse.data.billing_phone,
                'HomeAddress': serviceResponse.data.billing_address_1,
                'City': serviceResponse.data.billing_city,
                'data': serviceResponse.data
                
             })
                
           }
           else{
           }
         })
       .catch((error) => console.log(error));
      
  }

  //User update profile api method -
async myProfileUpdate(){
    const value = await AsyncStorage.getItem('userlogin');
    // Alert.alert(value)
    
    var details = {
          'userId':value,
          'first_name':this.state.firstname,
          'last_name':this.state.lastname,
          'user_email':this.state.Email,
          'billing_phone':this.state.PhoneNumber,
          'random_password':this.state.Password,
          'billing_address_1':this.state.HomeAddress,
          'billing_address_2':'',
          'billing_city':this.state.City
         };
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");
         fetch(MYPROFILE_URL, {
         method: 'POST',
         headers: {
         'Content-Type':'application/x-www-form-urlencoded'
         },
         body: formBody
         })
         .then((response) => response.json()
         )
         
         .then((serviceResponse) => {
            AsyncStorage.setItem('userNameCocina' ,(this.state.firstname) + " " +(this.state.lastname)); 
            Alert.alert(JSON.stringify(serviceResponse));
             if(serviceResponse.success==1){
                //  alert('Updated Succesfully'+this.state.HomeApartNo + this.state.firstname);
                AsyncStorage.setItem('userNameCocina' ,(this.state.firstname) + " " +(this.state.lastname)); 
            
                //  this.props.navigation.navigate('ChefRegistration',{
                //      first_name:this.state.firstname,
                //      billing_address_1:this.state.HomeAddress,
                //      billing_address_2:this.state.HomeApartNo,
                //     user_phone:this.state.PhoneNumber
                //  })
                  
             }
             else{
                 //  alert('Please enter valid email and address')
             }
           })
         .catch((error) => console.log(error));
        }
     
    render()
      {
       
        const {firstname ,lastname,Email,PhoneNumber,HomeAddress,City}  = this.state;
        return(
          
            <View style={Style.mainView}>
            <View style={Style.PersonalInfoView}>
            <Text style={Style.PersonalInfoTxtStyle}>Personal Info</Text>
            </View>
            <ScrollView style={{flex:.9}}>
            <View style={{flex:.9,marginLeft:20,marginRight:20, marginTop: 20}}>
                <Text style={{color:'#b5803b'}}>First Name</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                value={firstname}

                    onChangeText={val => this.onChangeText('firstname', val)}

                ></TextInput>

                <Text style={{color:'#b5803b'}}>Last Name</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                                value={lastname}

              onChangeText={val => this.onChangeText('lastname', val)}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>Email</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                 value={Email}
                keyboardType={"email-address"}
                onChangeText={val => this.onChangeText('Email', val)}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>Phone Number</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                maxLength={10}
                value={PhoneNumber}
                onChangeText={val => this.onChangeText('PhoneNumber', val)}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>Password</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                secureTextEntry={true}
                onChangeText={val => this.onChangeText('Password', val)}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>Home Address</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                  value={HomeAddress} 
                      onChangeText={val => this.onChangeText('HomeAddress', val)}
                ></TextInput>

                  {/* <Text style={{color:'#b5803b'}}>Home/Apart.Nbr</Text>
                 <TextInput style={Style.scrollTxtInputStyle}
                      onChangeText={val => this.onChangeText('ApartNbr', val)}
                
                 ></TextInput>  */}

                <Text style={{color:'#b5803b'}}>City</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                                  value={City} 

                     onChangeText={val => this.onChangeText('City', val)}
                ></TextInput>
                </View>
            </ScrollView>
            <View style={{flex:.1}}>
                    <TouchableOpacity onPress={()=>this.myProfileUpdate()} 
                    style={Style.touchStyle}><Text style={{color:'white',textAlign:'center'}}>Update</Text></TouchableOpacity>
                </View>
            </View>
            );
    }
}