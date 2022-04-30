import React, { Component } from 'react'
import { View, Text, ScrollView, 
    TouchableOpacity, Image, FlatList ,Dimensions,AsyncStorage,Alert,
} from 'react-native';
//import { exportDefaultSpecifier } from '@babel/types';

// import Txt from '../../Components/text/index';
// import Style from './Myprofilestyle'
const devicewidth=Dimensions.get('window').width
export default class AccountSetting extends Component {


    constructor(props) {
        super(props);
        this.state = {
            arr_accountSetting: [{img_profile:require('../../../BottomBarScreens/Assets/AccountSettingImages/profilePhoto.png'),txtProfile_photo: 'Profile Photo'},
           { img_profile:require('../../../BottomBarScreens/Assets/AccountSettingImages/Profile.png'),txtProfile_photo: 'Profile'},
           { img_profile:require('../../../BottomBarScreens/Assets/AccountSettingImages/Payment.png'),txtProfile_photo: 'Payment Methode'},
           { img_profile:require('../../../BottomBarScreens/Assets/AccountSettingImages/Chat.png'),txtProfile_photo: 'My Messages'},
           { img_profile:require('../../../BottomBarScreens/Assets/AccountSettingImages/Contact.png'),txtProfile_photo: 'Contact Comfort Conia Support'},
           { img_profile:require('../../../BottomBarScreens/Assets/AccountSettingImages/LogOut.png'),txtProfile_photo: 'Log out'}
           
  ]
        }
    }


    static navigationOptions = ({
        title: 'Account Settings',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginLeft:60,
            // textAlign: 'center',
            // marginRight:150,
            fontWeight: '500'
        },
    });

PressMethod(index)
{
    if(index==1)
    {
        this.props.navigation.navigate('MyProfile')
    }
    else if(index==2)
    {
        this.props.navigation.navigate('PaymentMethod')
        // alert(index)
    }
    else if(index==3)
    {
        
    }
    else if(index==4)
    {
        this.props.navigation.navigate('CustomerSupport')
    }


else if (index==5){
    AsyncStorage.removeItem('userlogin');
    Alert.alert(
        'Comfort Cocina',
        'Are you sure you want to logout?',
        [
            {text:'Cancel',onPress:()=> console.log('Cancel Pressed'),style:'cancel'},
            {text:'OK', onPress:()=>  this.props.navigation.navigate('LoginScreen')}
        ],
        {cancelable:false}
    )
   
}
else if (index==0){
    this.props.navigation.navigate('ProfilePicture')
}
}

    renderItem=({item,index}) => {
        return (
            <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.PressMethod(index)}>
                <View style={{height:50,flexDirection:'row',borderBottomColor:'lightgrey',borderBottomWidth:1,alignItems:'center',backgroundColor:'white'}}>
                <View style={{marginLeft:20}}>
                <Image source={item.img_profile} resizeMode='contain' style={{height:16,width:16}}></Image>

                </View>
                <View style={{flex:.9,marginLeft:10}}>
                <Text style={{color:'#830000'}}>{item.txtProfile_photo}</Text>

                </View>
                </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex:1}}>
                <FlatList
                    data={this.state.arr_accountSetting}
                    renderItem={this.renderItem}
                />
                <View style={{alignItems:'center'}}>
                <Image source={require('../../../BottomBarScreens/Assets/AccountSettingImages/splashlogo1.png')} resizeMode='contain' style={{width:250,height:100}}></Image>

                </View>
            </View>
        );
    }
}