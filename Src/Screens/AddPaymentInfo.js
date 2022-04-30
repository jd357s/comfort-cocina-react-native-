import React, { Component } from 'react';
import { View, Text, TextInput, Image,TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class AddPaymentInfo extends Component {


    static navigationOptions = ({
        title: 'AddPaymentInfo',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginLeft:40,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });




    render() {
        return (
            <KeyboardAwareScrollView>
                            <View style={{ flex: 1 }}>
                <View style={{ borderColor: 'grey', borderWidth: 1, margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{flex:.8,height:40, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <Image source={require('../../Src/Screens/BottomBarScreens/Assets/card.png')} style={{ height: 25, width: 30 }}></Image>
                            <TextInput  style={{flex:.9}} placeholder="Card Number"></TextInput>
                        </View>

                        <View style={{flex:.2,height:40, justifyContent: 'center' }}>
                        <TouchableOpacity>
                            
                            <Image source={require('../../Src/Screens/BottomBarScreens/Assets/photo-camera.png')} resizeMode="contain" style={{ height: 30, width: 35 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderColor: 'grey', borderWidth: 1, margin: 10 }}>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{flex:.5, flexDirection: 'row',height:40,alignItems: 'center', marginLeft: 20,marginRight:50 }}>
                            <Text>Exp Date</Text>
                            <TextInput></TextInput>
                        </View>
                        <View style={{flex:.3, flexDirection: 'row',height:40, alignItems: 'center', marginLeft: 20 }}>
                            <Text>CVV</Text>
                            <TextInput></TextInput>
                        </View>
                    </View>
                </View>




                <View style={{ borderColor: 'grey', borderWidth: 1, margin: 10 }}>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 10, marginRight: 10, justifyContent: 'center' }}>
                        <TextInput placeholder='Name on Card'></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 10, marginRight: 10, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', flex: .7, alignItems: 'center' }}>
                            <Text>Billing Address</Text>
                            <TextInput  style={{flex:.9}}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', flex: .3, alignItems: 'center', marginLeft: 20 }}>
                            <Text>Apt</Text>
                            <TextInput  style={{flex:.9}}></TextInput>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{flexDirection: 'row', flex: .5, alignItems: 'center', marginLeft: 20 }}>
                            <Text>City</Text>
                            <TextInput style={{flex:.9}}></TextInput>
                        </View>
                        <View style={{flexDirection: 'row', flex: .3, alignItems: 'center', marginLeft: 10 }}>
                            <Text>Status</Text>
                            <TextInput  style={{flex:.9}}></TextInput>
                        </View>
                        <View style={{flexDirection: 'row', flex: .2, alignItems: 'center', marginLeft: 10 }}>
                            <Text>Zip</Text>
                            <TextInput  style={{flex:.9}}></TextInput>
                        </View>
                    </View>

                    
                </View>
                <View style={{ borderColor: 'grey', borderWidth: 1, marginLeft: 10, marginRight: 10, justifyContent: 'center' }}>
                        <TextInput style={{marginLeft:10}} placeholder='Name this Card (Optional)'></TextInput>
                    </View>
            </View>
            </KeyboardAwareScrollView>

        );
    }
}
