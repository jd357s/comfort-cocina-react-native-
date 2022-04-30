import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image, TouchableOpacity
}
  from 'react-native';
import {Card} from 'native-base'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrCart: [{
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items'
      },

      {
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items'
      },


      {
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items'
      },

      {
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items'
      },


      ]
    }
  }

  static navigationOptions = ({
    header: <View style={{ backgroundColor: '#841314', height: 50, alignItems: 'center',justifyContent:'center' }}><Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>Cart</Text></View>,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#841314',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 22
    },
  })


  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
      <Card>
        <View style={{ backgroundColor: '#F8F8F8', marginBottom: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, }}>
            <View style={{ flex: 0.25, marginLeft: 10 }} >
              <Image source={item.imageCheftCart} style={{ height: 60, width: 60 }}></Image>
            </View>

            <View style={{ flex: 0.5, justifyContent: 'center' }} >
              <Text style={{ fontSize: 15 }}>{item.txtname}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image source={item.imageMarker} resizeMode="contain" style={{ height: 10, width: 15 }}></Image>
                <Text style={{ fontSize: 10 }}>{item.txtmiles}</Text>
              </View>

            </View>


            <View style={{ flex: 0.25, justifyContent: 'center' }}>
              <Text style={{ textDecorationLine: 'underline', color: 'blue', fontSize: 12 }}>{item.txtReview}</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 10, marginLeft: 10 }}>
              <Image source={item.imageMarker} resizeMode="contain" style={{ height: 15, width: 15 }}></Image>

              <Text style={{ marginBottom: 10, fontSize: 12 }}>{item.txtSingle}</Text>
            </View>

          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ backgroundColor: '#b5803b', marginLeft: 10, marginRight: 10, color: 'white' }}>Thurs,14 Feb</Text>
          <Text style={{ backgroundColor: '#b5803b', marginLeft: 10, marginRight: 10, color: 'white' }}>Picker 12 PM</Text>
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' ,height:50}}>
            <Text>{item.txtItem2}</Text>
          </View>

          <View style={{ flex: 0.5 ,justifyContent:'center'}}>
            <Text style={{ fontSize: 12 }}>{item.txtMealname}</Text>
            <Text style={{ fontSize: 10 }}>{item.txtSingle1}</Text>
          </View>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 12 }}>{item.txtDollar}</Text>
          </View>
        </View>


        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center',height:50 }}>
            <Text>{item.txtItem}</Text>
          </View>

          <View style={{ flex: 0.5,justifyContent:'center' }}>
            <Text style={{ fontSize: 12 }}>{item.txtMealname}</Text>
            <Text style={{ fontSize: 10 }}>{item.txtFamily}</Text>
          </View>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 12 }}>{item.txtDollar1}</Text>

          </View>
        </View>

        <View style={{ height: 50, justifyContent: "center", marginLeft: 10, color: 'white' }}>
          <TouchableOpacity style={{ backgroundColor: '#b5803b', width: 100, height: 25 }} >
            <Text style={{ color: 'white', textAlign: 'center' }}>{item.txtButton}</Text>
          </TouchableOpacity>
        </View>
        </Card>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <FlatList
            data={this.state.arrCart}
            renderItem={this.renderItem}
          />
        </View>
          <View style={{flex:.1, flexDirection: 'row',alignItems:'center', borderBottomColor: 'lightgrey', borderBottomWidth: 1 }}>
            <View style={{ flex: 0.7,marginLeft:10}}>
              <Text>subtotal</Text>

            </View>
            <View style={{ flex: 0.3}}>
              <Text>$</Text>

            </View>
          </View>
          <View style={{flex:.1, flexDirection: 'row',alignItems:'center'}}>
            <View style={{ flex: 0.7,marginLeft:10}}>

              <Text>tax</Text>
            </View>
            <View style={{ flex: 0.3}}>

              <Text>$</Text>
            </View>
            
          </View>
           <View >
              <TouchableOpacity style={{ backgroundColor: '#b5803b', height: 60, justifyContent: 'center' }} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 17 }}>Place Order:$148.75</Text></TouchableOpacity>
                </View>
      </View>
    );
  }
}