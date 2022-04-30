

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import FinalRoot from './Src/Root/root'
import Allegries from './Src/Screens/Allergies';
import YourCocinaMenu from './Src/Screens/YourCocina/YourCocina';
import YourCocinaDish from './Src/Screens/BottomBarScreens/Menu/DishDetailsYourCocina/Dishdetail';
import CalenderScreen from './Src/Screens/Calender/calender';
import Info from './Src/Screens/BottomBarScreens/My Cocina/Info/info';





export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
<FinalRoot/>
      </SafeAreaView>
    );
  }
}

