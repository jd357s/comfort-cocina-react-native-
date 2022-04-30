import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground,TouchableOpacity,AsyncStorage,ScrollView } from 'react-native';
import {CHEF_AGREEMENT} from '../../../Config/Global';
const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width
import Loader from '../../../../Components/Loader';

export default class ChefAgreement extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            accept:'Accepted',
            visible:true,
            isLoading: 0
        }
    }

    static navigationOptions = ({
        title: 'Chef Agreement',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginRight:50,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });


    async AcceptMethod()
    {
        this.setState({ isLoading : 1 })
    const value = await AsyncStorage.getItem('userlogin')
   
        var details = {
          'userId':value,
          'chef_agreement': 1,
         };
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&")
     
         fetch(CHEF_AGREEMENT, {
         method: 'POST',
         headers: {
         'Content-Type':'application/x-www-form-urlencoded'
         },
         body: formBody
         })
         .then((response) => response.json()
         )
         .then((serviceResponse) => {
             this.setState({ isLoading : 0 })
             if(serviceResponse.success==1){
                 alert('Updated Succesfully')
                 this.props.navigation.navigate('ChefUseAgreements',{
                    item:this.state.accept,
                    abc:this.state.visible
                })
                  
             }
             else{
                 //  alert('Please enter valid email and address')
             }
           })
         .catch((error) => console.log(error));

   
}


    render() {
        const {isLoading}= this.state;
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    resizeMode='contain'
                    style={{
                        height: deviceheight,
                        width: devicewidth,
                    }}
                    source={require('../../../../Assets/Loginimage/loginsplash.png')} >
{/* <ScrollView style={{bottom:10}}> */}
                    <View style={{ padding: 5, justifyContent: 'center', marginLeft: 15 }}>
                        <Text>Chef Agreement</Text>
                    </View>
                    <View style={{ padding: 5, borderColor: 'black', borderWidth: 1, margin: 15 }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ color: 'black' }}>Microenterprise Agreement</Text>
                            <Text style={{ color: 'black' }}>General Site Usage</Text>
                            <Text style={{ color: 'black' }}>Last Revised December 16,2013</Text>


                        </View>

                        <View>
                            <Text style={{ color: 'black', fontSize: 11 }}>Welcome to www.lorem-ipsum.info. This site is provided as a
                                service to our visitors and may be used for informational
                                 purpose only. Because the Terms and conditions contain legal
                             obligations, please read them carefully.</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 13 }}>1. YOUR AGREEMENT</Text>
                            <Text style={{ color: 'black', fontSize: 11 }}>By using this Site, you agree to be bound by, and to comply with these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site</Text>
                        </View>
                        <Text style={{fontSize:11,color:'black',fontWeight:'400'}}>PLEASE NOTE:</Text>
                        <Text style={{fontSize:10}}>We reserve the right, at our sole direction, to change,
                            modify or otherwise alter these Terms and Conditions at any time.
                            Uncless otherwise indicated, amendments will become effective immediately.
                            Please review these terms and Condition periodically. Your continued use of the
                             Site following the posting of changes and/or modifications will constitute your
                              acceptance of the revised Tems and Conditions and the reasonableness of these
                               standards for notice of chnages. For your information, this page was last
                               updated as of the date at the top of thes
                            terms and conditions.</Text>


                            <Text style={{fontSize:11,color:'black',fontWeight:'400'}}>PRIVACY:</Text>
                        <Text style={{fontSize:10}}>Please review our Privacy Policy,Which also governs your visit to this site, to understand our practices.</Text>


                        <Text style={{fontSize:11,color:'black',fontWeight:'400'}}>LINKED SITES:</Text>
                        <Text style={{fontSize:10}}>We reserve the right, at our sole direction, to change,
                            modify or otherwise alter these Terms and Conditions at any time.
                            
                             </Text>
                      
                    </View>

                    <View style={{margin:10}}>
                    <TouchableOpacity onPress={()=>this.AcceptMethod()} style={{ backgroundColor:'#b5803b',height:50,justifyContent:'center'}} ><Text style={{color:'white',textAlign:'center',fontSize:15}}>Accept</Text></TouchableOpacity>
                </View>
                    {/* </ScrollView> */}
                    {isLoading ? <Loader/> : <Text/>}
                </ImageBackground>
            </View>
        );
    }
}