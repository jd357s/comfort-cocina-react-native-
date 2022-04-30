import React,{Component} from 'react'
import {View,TextInput,Text,ScrollView,TouchableOpacity,Image,AsyncStorage,Alert} from 'react-native';
import Txt from '../../Components/text/index';
import Style from './Myprofilestyle'
import {CHEF_REGISTER} from '../../Screens/Config/Global';
import Loader from '../../Components/Loader';
export default class UpdateHomeAddress extends Component{

    constructor(props)
    {
        super(props)
        {const {params}= this.props.navigation.state;
       // let data= JSON.stringify(params.Data);
        let add = params.Data.hNumber;
        let city = params.Data.hCity;
        let country = params.Data.hCountry;
        let pin = params.Data.hPincode;
            this.state={
                address:add,
                city: city,
                country:country,
                pincode:pin,
                isLoading:0
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
async myProfileUpdate(){
    const value = await AsyncStorage.getItem('userlogin');
    // Alert.alert(value)
    this.setState({isLoading: 1})
    var details = {
          'userId':value,
          'hNumber':this.state.address,
          'hCity':this.state.city,
          'hCountry':this.state.country,
          'hPincode':this.state.pincode,
         }; 
         
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");
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
            //Alert.alert(JSON.stringify(serviceResponse));
             if(serviceResponse.success==1){
                 alert('Updated Succesfully')
                 this.props.navigation.navigate('ChefRegistration',{
                     billing_address_1:this.state.address+','+this.state.city+','+this.state.country+','+this.state.pincode
                 })
                  
             }
             else{
                 //  alert('Please enter valid email and address')
             }
           })
         .catch((error) => console.log(error));
        }
        componentWillUnmount(){
            const {params}= this.props.navigation.state;
            params.callChef();
        }   
    render()
      {
        const{address, city, country, pincode, isLoading} = this.state;
        return(
         <View style={Style.mainView}>
            <View style={Style.PersonalInfoView}>
            <Text style={Style.PersonalInfoTxtStyle}>Home Address</Text>
            </View>
            <ScrollView style={{flex:.9}}>
            <View style={{flex:.9,marginLeft:20,marginRight:20}}>
                <Text style={{color:'#b5803b'}}>Address</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                             onChangeText={val => this.onChangeText('address', val)}
                value={address}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>City</Text>
                <TextInput style={Style.scrollTxtInputStyle}
              onChangeText={val => this.onChangeText('city', val)}
              value={city}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>Country</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                onChangeText={val => this.onChangeText('country', val)}
                value={country}
                ></TextInput>

                <Text style={{color:'#b5803b'}}>Zip Code</Text>
                <TextInput style={Style.scrollTxtInputStyle}
                maxLength={10}
                onChangeText={val => this.onChangeText('pincode', val)}
                value={pincode}
                ></TextInput>
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