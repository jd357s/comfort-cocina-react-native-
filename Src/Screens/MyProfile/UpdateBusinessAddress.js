import React,{Component} from 'react'
import {View,TextInput,Text,ScrollView,TouchableOpacity,Image,AsyncStorage,Alert,ActivityIndicator} from 'react-native';
import Style from './Myprofilestyle'
import {CHEF_REGISTER} from '../Config/Global';
export default class UpdateBusinessAddress extends Component{

    constructor(props)
    {
        super(props)
        {
            const {params}= this.props.navigation.state;
            let add = JSON.stringify(params.Data.bNumber);
            let city = JSON.stringify(params.Data.bCity);
            let country = JSON.stringify(params.Data.bCountry);
            let pin = JSON.stringify(params.Data.bPincode);
            this.state={
                address:add,
                city:city,
                country:country,
                pincode:pin,
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
async myProfileUpdate(){
    const value = await AsyncStorage.getItem('userlogin');
    // Alert.alert(value)
    this.setState({isLoading: 1});
    var details = {
          'userId':value,
          'bNumber':this.state.addbNumberress,
          'bCity':this.state.city,
          'bCountry':this.state.country,
          'bPincode':this.state.pincode,
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
             if(serviceResponse.success==1){
                 alert('Updated Succesfully')
                 this.props.navigation.navigate('ChefRegistration',{
                    billing_address_2:this.state.address+','+this.state.city+','+this.state.country+','+this.state.pincode
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
            isLoading ? 
            <ActivityIndicator size="large" color="#841314" style={{top:100}} /> :
            <View style={Style.mainView}>
            <View style={Style.PersonalInfoView}>
            <Text style={Style.PersonalInfoTxtStyle}>Business Address</Text>
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
                value={pincode}
                maxLength={10}
                onChangeText={val => this.onChangeText('pincode', val)}
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