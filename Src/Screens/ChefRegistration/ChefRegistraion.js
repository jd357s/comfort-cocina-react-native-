import React, { Component } from 'react'
import {  View,Text, Image, TextInput, ScrollView, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { thisTypeAnnotation } from '@babel/types';
// import Txt from '../../Components/text/index';
// import Style from './Myprofilestyle'
import ImagePicker from 'react-native-image-picker';
import  { CHEF_REGISTER } from '../Config/Global';
import { CHEF_DETAILS } from '../Config/Global';
var options;
export default class ChefRegistration extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            checked:'',
            ImageSource:null,
            legalName:'',
            HomeAddress:'',
            BussinessAddresss:'',
            PhoneNumber:'',
            dateOfBirth:'',
            userDetails:{}
        }
    }


    static navigationOptions = ({
        title: 'Chef Registration',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '60%',
            marginLeft: 40,
            textAlign: 'center',
            fontWeight: '500'
        },
    });

    options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

componentDidMount(){
   this.getChefDetails();
}
proFun(){
    this.getChefDetails();
}

async getChefDetails(){
    const userid = await AsyncStorage.getItem('userlogin');
    var details = {
      'userId':userid
     };
     var formBody = [];
     for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&")
    fetch(CHEF_DETAILS, {
        method: 'POST',
        headers: {
        'Content-Type':'application/x-www-form-urlencoded'
        },
        body: formBody
        })
        .then((response) => response.json()
        )
        .then((serviceResponse) => {
            if(serviceResponse.success==1){
                
               this.setState({
               'legalName':serviceResponse.user_detail.first_name, 
               'HomeAddress': serviceResponse.user_detail.hNumber+','+serviceResponse.user_detail.hCity+','+serviceResponse.user_detail.hCountry+','+serviceResponse.user_detail.hPincode,
               'BussinessAddresss': serviceResponse.user_detail.bNumber+','+serviceResponse.user_detail.bCity+','+serviceResponse.user_detail.bCountry+','+serviceResponse.user_detail.bPincode ,
               'PhoneNumber': serviceResponse.user_detail.mobile,
               'dateOfBirth': serviceResponse.user_detail.dob,
               'userDetails':serviceResponse.user_detail
            })
                 
            }
            else{
                
            }
          })
        .catch((error) => console.log(error));

}
PictureUpload()
    {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
            //   const source = { uri: response };
          
             // alert(JSON.stringify(source));
              this.setState({
                ImageSource: response,
              });
             this.OnProfileUpload();
            }
          });
    }
    async OnProfileUpload() {
    
       const value = await AsyncStorage.getItem('userlogin');
  
     var formBody = [];
     var details= this.createFormData(this.state.ImageSource, { userId: value });
       for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
       }
       formBody = formBody.join("&");
         fetch(CHEF_REGISTER, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formBody
         })
         
          .then((response) => response.json()
          ).then((serviceResponse) => {
              if (serviceResponse.success == 1) {
                  alert('Updated Succesfully')
              }
              else {
                  // Alert.alert('Please enter valid email and password')
              }
              
          })
          .catch((error) => 
              console.log(error)
          );


  }

    editProfile() {
        this.props.navigation.navigate('MyProfile');
    }
    editName() {
        this.props.navigation.navigate('UpdateChefName',{callChef:this.proFun.bind(this), Data: this.state.userDetails});
    }
    editHomeAddress() {
        this.props.navigation.navigate('UpdateHomeAddress',{callChef:this.proFun.bind(this),Data: this.state.userDetails});
    }
    editBuisAddress(){
        this.props.navigation.navigate('UpdateBusinessAddress',{callChef:this.proFun.bind(this),Data: this.state.userDetails});
    }
    editmobile(){
        this.props.navigation.navigate('UpdateChefPhone',{callChef:this.proFun.bind(this),Data: this.state.userDetails});
    }
    editdob(){
        this.props.navigation.navigate('UpdateChefdob',{callChef:this.proFun.bind(this),Data: this.state.userDetails});
    }

    render() {

        const {legalName ,HomeAddress,BussinessAddresss,PhoneNumber,dateOfBirth}  = this.state;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 0.15, height: 80, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                        <View style={{ flex: 0.3, alignItems: 'center' }}>
                            <Image source={require('./../BottomBarScreens/Assets/MycocinoMenuImage/Circlelogo.png')}
                                resizeMode="contain"
                                style={{ height: 50, width: 50 }}
                            ></Image>
                        </View>
                        <View style={{ flex: .7 }}>
                            <Text style={{ fontSize: 12, color: '#830000' }}>Are You a Chef?</Text>
                            <Text style={{ fontSize: 12, color: '#b5803b' }}>Why not join the Comfort Cocina family?</Text>
                        </View>
                    </View>
                    <View style={{ flex: .12, height: 60, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                        <View style={{ flex: .8, marginLeft: 20 }}>
                            <Text style={{ color: '#830000' }}>Legal Name</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>{legalName}</Text>
                        </View>

                        <View style={{ flex: .2 }}>
                            <TouchableOpacity onPress={() => this.editName()}>

                                <Image source={require('./../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ flex: .20, height: 100, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                        <View style={{ flex: .8, marginLeft: 20 }}>
                            <Text style={{ color: '#830000' }}>Home Address</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>{HomeAddress}</Text>
                            {/* <Text style={{ marginLeft: 10, color: '#b5803b' }}>Los Angeles, California</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>90018</Text> */}
                        </View>

                        <View style={{ flex: .2 }}>
                            <TouchableOpacity onPress={() => this.editHomeAddress()}>

                                <Image source={require('./../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <View style={{ height: 100, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                        <View style={{ flex: .8, marginLeft: 20 }}>
                            <Text style={{ color: '#830000' }}>Business Address</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>{BussinessAddresss}</Text>
                            {/* <Text style={{ marginLeft: 10, color: '#b5803b' }}>Los Angeles, California</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>90018</Text> 
                        </View>

                        <View style={{ flex: .2 }}>
                            <TouchableOpacity onPress={() => this.editBuisAddress()}>

                                <Image source={require('./../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View> */}



                    <View style={{ flex: .12, height: 60, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                        <View style={{ flex: .8, marginLeft: 20 }}>
                            <Text style={{ color: '#830000' }}>Mobile Number</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>{PhoneNumber}</Text>
                        </View>

                        <View style={{ flex: .2 }}>
                            <TouchableOpacity onPress={() => this.editmobile()}>

                                <Image source={require('./../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: .12, height: 60, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                        <View style={{ flex: .8, marginLeft: 20 }}>
                            <Text style={{ color: '#830000' }}>Date of Birth</Text>
                            <Text style={{ marginLeft: 10, color: '#b5803b' }}>{dateOfBirth}</Text>
                        </View>

                        <View style={{ flex: .2 }}>
                            <TouchableOpacity onPress={() => this.editdob()}>

                                <Image source={require('./../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ height: 40, backgroundColor: '#E5E7E9', flexDirection: 'row', alignItems: 'center', margin: 10, borderRadius: 10 }}>
                        {/* <View style={{ flex: .15, marginLeft: 20 }}>
                        <TouchableOpacity onPress={()=>this.PictureUpload()} style={{flexDirection:'row',marginTop:30}}>
                        <Image style={{height:20,width:20}} 
                        resizeMode='contain'
                        source={require('../../Assets/DishImages/upload.png')}></Image></TouchableOpacity>
                        </View> */}

                      
                        <View style={{flexDirection: 'row'}}>
                            
                            <View style={{ flex: .1, paddingLeft:10 }}>
                            <TouchableOpacity onPress={()=>this.PictureUpload()}>
                            <Image style={{height:40,width:40}} 
                        resizeMode='contain'
                        source={require('../../Assets/DishImages/upload.png')}></Image>
                             </TouchableOpacity>
                        </View>
                          <View style={{ flex: .9}}>
                                <Text style={{marginTop:10, marginLeft:0, textAlign:'left',color: '#b5803b', fontSize: 14 }}>Submit Microenterprise Permit</Text>
                             </View>
                         </View>     
                       
                    </View>




                </View>
                <View style={{ height: 200, borderBottomWidth: 3, borderBottomColor: '#E5E7E9', backgroundColor: '#E5E7E9' }}>

                </View>

                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChefUseAgreements', {callChef:this.proFun.bind(this),Data: this.state.userDetails})} style={{ backgroundColor: '#b5803b', height: 50, justifyContent: 'center' }} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Continue</Text></TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}