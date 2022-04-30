import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Menu from '../Screens/BottomBarScreens/Menu/Menu';
import Favorites from '../Screens/BottomBarScreens/Favorites/Favorites';
import MenuScreen from '../Screens/BottomBarScreens/My Cocina/Menu/Menu';
import Cart from '../Screens/BottomBarScreens/Orders/Cart/Cart'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import Splash from '../Screens/Splash/index';
import Login from '../Screens/Login/index';
import SignUp from '../Screens/SignUp/index'
import DishDetail from '../Screens/BottomBarScreens/Menu/Dish/DishDetail';
import ChefProfile from '../Screens/BottomBarScreens/Menu/Dish/ChefProfile';
import FilterScreen from '../Screens/BottomBarScreens/Menu/Dish/Filter';
import Allergies from '../Screens/Allergies';
import Info from '../Screens/BottomBarScreens/My Cocina/Info/info'

import ChefRegistration from '../Screens/ChefRegistration/ChefRegistraion'
import ChefUseAgreement from '../Screens/ChefRegistration/ChefUseAgreements';
import TermsAndConditions from '../Screens/BottomBarScreens/My Cocina/TermsConditions/index'
import ChefAgreement from '../Screens/BottomBarScreens/My Cocina/TermsConditions/chefAgreement'
import MicroEnterPrise from '../Screens/BottomBarScreens/My Cocina/TermsConditions/microenterprise'
import AccSetting from '../../Src/Screens/BottomBarScreens/My Cocina/AccountSetting/AccountSetting'

import RateProfile from '../Screens/MyProfile/RateProfile';
import ProfilePicture from '../Screens/BottomBarScreens/My Cocina/Profile Picture/ProfilePicture'
import AuthLoading from '../AuthLoading';

import Paymentmethod from '../Screens/PaymentMethods'
import AddPaymentInfo from '../Screens/AddPaymentInfo'
import CustomerSupportScreen from '../Screens/CustomerSupport/CustomerSupport'
import MyProfile from '../Screens/MyProfile/Myprofile'
import UpdateChefName from '../Screens/MyProfile/UpdateChefName'
import UpdateHomeAddress from '../Screens/MyProfile/updateHomeAddress'
import UpdateBusinessAddress from '../Screens/MyProfile/UpdateBusinessAddress'
import UpdateChefPhone from '../Screens/MyProfile/UpdateChefPhone'
import UpdateChefdob from '../Screens/MyProfile/UpdateChefdob'
import DishDetailYourConia from '../../Src/Screens/BottomBarScreens/Menu/DishDetailsYourCocina/Dishdetail'
import ScheduleDish from '../Screens/BottomBarScreens/Menu/ScheduleDish.js'

const RootStack = createStackNavigator({
    SplashScreen: { screen: Splash, navigationOptions: { header: null } },

    LoginScreen: { screen: Login },

    SignUpScreen: {
        screen: SignUp, navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
},
    {
        initialRouteName: 'SplashScreen'
    });


const MenuScreenStack = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            header: <View style={{ height: 50, backgroundColor: '#841314', flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ flex: .2 }}>
                    <Image style={{ height: 25, width: 18, marginLeft: 30 }}  source={require('../../Src/Screens/BottomBarScreens/Assets/locations.png')}></Image>

                </View>
                <View style={{ flex: .5 }}>
                    <TextInput style={{ borderBottomColor: '#fff', borderBottomWidth: 1, marginBottom: 5, }} placeholder='Enter address' placeholderTextColor='#fff'></TextInput>
                </View>
                <View style={{ flex: .3 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')} >
                        <Image style={{ height: 20, width: 20, marginLeft: 40 }} source={require('../Assets/Loginimage/detail.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>,
                            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
                            ,
            // headerRight:,
            headerStyle: {
                backgroundColor: '#841314',

            },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontSize: 22
            // },


        })
    },
    DishDetail: {
            screen: DishDetail,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
            })
        },


    ChefProfile: {
        screen: ChefProfile, 
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    Filterscreen: { screen: FilterScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        }) },
    InfoScreen: { screen: Info ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })}

})

MenuScreenStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};


const FavoritesScreenStack = createStackNavigator({
    Favorites: {
        screen: Favorites
    }
})

FavoritesScreenStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};





const OrdersScreenStack = createStackNavigator({
    Orders: {
        screen: Cart
    }
})

OrdersScreenStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};



const MyCocinaScreenStack = createStackNavigator({
    MyCocina: {
        screen: MenuScreen
    },
    ChefRegistration: {
        screen: ChefRegistration, navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    ChefUseAgreements: { screen: ChefUseAgreement ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })},
    TermsAndCondition: {
        screen: TermsAndConditions, navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    ChefAgreement: {
        screen: ChefAgreement, navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    MicroEnterPrise: {
        screen: MicroEnterPrise, navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    
    AccountSetting: { screen: AccSetting,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })},
    Rateprofile: { screen: RateProfile ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })},
    ProfilePicture: { screen: ProfilePicture,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        }) },
    MyProfile: { screen: MyProfile ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    UpdateChefName: { screen: UpdateChefName ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    UpdateHomeAddress: { screen: UpdateHomeAddress ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    UpdateBusinessAddress: { screen: UpdateBusinessAddress ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    UpdateChefPhone: { screen: UpdateChefPhone ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    UpdateChefdob: { screen: UpdateChefdob ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })
    },
    PaymentMethod: { screen: Paymentmethod,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        }) },
    AddPaymentInfo: { screen: AddPaymentInfo ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })},
    CustomerSupport: { screen: CustomerSupportScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        }) },
    AllergiesScreen: { screen: Allergies,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        }) },
    YourCocinaDishDetail:{screen:DishDetailYourConia,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
        })},
        ScheduleDish:{
            screen:ScheduleDish,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Image source={require('../Assets/SignUpImage/leftarrow.png')} resizeMode="contain" style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>
            })

        }


     })


MyCocinaScreenStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};







const BottomNavigator = createBottomTabNavigator({
    Menu: {
        screen: MenuScreenStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ height: 27, width: 27 }} source={require('../Screens/BottomBarScreens/Assets/menu.png')}></Image>
            )
        })
    },
    Favorites: {
        screen: FavoritesScreenStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ height: 25, width: 30 }} source={require('../Screens/BottomBarScreens/Assets/favorite.png')}></Image>
            )
        })
    },
    Orders: {
        screen: OrdersScreenStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ height: 25, width: 25 }} source={require('../Screens/BottomBarScreens/Assets/orders.png')}></Image>
            )
        })
    },
    MyCocina: {
        screen: MyCocinaScreenStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ height: 25, width: 25 }} source={require('../Screens/BottomBarScreens/Assets/mycocina.png')}></Image>
            )
        })
    },
    }, {
        tabBarOptions: {
            activeTintColor: '#b5803b',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            tabBarPosition: "top",

       }
    })

const FinalRoot = createSwitchNavigator({
    AuthLoading: {
        screen: AuthLoading
    },
    Root1: {
        screen: RootStack
    },
    Home: {
        screen: BottomNavigator
    }
   },
    {
        initialRouteName: 'AuthLoading',
    }

)

export default createAppContainer(FinalRoot)