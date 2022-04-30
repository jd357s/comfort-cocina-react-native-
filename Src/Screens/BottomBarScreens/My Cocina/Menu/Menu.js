import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, TextInput, Image,AsyncStorage , TouchableOpacity, FlatList, AppState, ActivityIndicator } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Card, Tab, TabHeading, Tabs } from 'native-base'
import Calendar from 'react-native-calendar'

import Style from './MenuChefStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default class MyCocino extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      visibleDish: true,
      userNameValue:null,
       userRole:'chef',
      arrData: [{
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: 'Following',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items',
        imageparttime: require('../../../../../Src/Assets/DishImages/burger.jpg'),

      },
      {
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: 'Following',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items',
        imageparttime: require('../../../../../Src/Assets/DishImages/burger.jpg'),
      },

      {
        imageCheftCart: require('../../../BottomBarScreens/Assets/cartImages/womanImage.png'), txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: 'Following',
        imageMarker: require('../../../BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items',
        imageparttime: require('../../../../../Src/Assets/DishImages/burger.jpg'),
      }
      ],

      arrMycocinaChef: [{
        imageChef_Mycocino: require('../../../../Assets/DishImages/womanimage.jpeg'), txtname_Mycocino: 'Barbara',
        txtReview_Mycocino: 'Follow', txtReview1_Mycocino: '5 Review',
        imageDish1_Mycocino: require('../../../../Assets/DishImages/noodle.jpeg'),
        txtMeal1_Mycocino: 'Civeche',
        imageMarker_Mycocino: require('../../../../Assets/DishImages/icons8-marker-26.png'),
        txtmiles_Mycocino: '3.1 miles',
        txtSingle1_Mycocino: '$10.99/Single  $45.99/Family', txtlanguage: 'Spanish'

      }],
      arr: [{
        imageDish: require('../../../../Assets/DishImages/burger.jpg'),
        txtMeal: 'Fritata Peppercorn',
        txtSingle: '$10.99/Single  $45.99/Family',
      },

      {
        imageDish: require('../../../../Assets/DishImages/chicken.jpg'),
        txtMeal: 'Civeche',
        txtSingle: '$10.99/Single  $45.99/Family',
      },
      {
        imageDish: require('../../../../Assets/DishImages/pizza.jpeg'),
        txtMeal: 'Civeche',
        txtSingle: '$10.99/Single  $45.99/Family',
      },
      {
        imageDish: require('../../../../Assets/DishImages/burger.jpg'),
        txtMeal: 'Fritata Peppercorn',
        txtSingle: '$10.99/Single  $45.99/Family',
      },

      {
        imageDish: require('../../../../Assets/DishImages/chicken.jpg'),
        txtMeal: 'Civeche',
        txtSingle: '$10.99/Single  $45.99/Family',
      },
      {
        imageDish: require('../../../../Assets/DishImages/pizza.jpeg'),
        txtMeal: 'Civeche',
        txtSingle: '$10.99/Single  $45.99/Family',
      },

      ],
      arrOrders: [{
        imageCheftCart: require('../../../../Screens/BottomBarScreens/Assets/cartImages/womanImage.png'),
        txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../../Screens/BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items',
        imgAccept: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/okDelte.png'),
        txtAccept: 'Accept',
        imgdecline: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/cancelicon.png'),
        txtDecline: 'Decline',
        imgdechat: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/chatIcon.png'),
        txtchat: 'Chat',
      },

      {
        imageCheftCart: require('../../../../Screens/BottomBarScreens/Assets/cartImages/womanImage.png'),
        txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../../Screens/BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items',
        txtSpecial: 'special Instructions; no tomato,pleasue',
        imgAccept: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/okDelte.png'),
        txtAccept: 'Accept',
        imgdecline: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/cancelicon.png'),
        txtDecline: 'Decline',
        imgdechat: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/chatIcon.png'),
        txtchat: 'Chat',

      },
      {
        imageCheftCart: require('../../../../Screens/BottomBarScreens/Assets/cartImages/womanImage.png'),
        txtname: 'Barbara',
        txtmiles: '3.1 miles',
        txtReview: '5 Reviews',
        imageMarker: require('../../../../Screens/BottomBarScreens/Assets/cartImages/mapIcon.png'),
        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
        txtTime: '', txtDate: '',
        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
        txtSingle1: '$10.99/Single',
        txtFamily: '$45.99/Family',
        txtDollar: '$21.98',
        txtDollar1: '$45.99',
        txtButton: 'Add Items',
        imgAccept: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/okDelte.png'),
        txtAccept: 'Accept',
        imgdecline: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/cancelicon.png'),
        txtDecline: 'Decline',
        imgdechat: require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/chatIcon.png'),
        txtchat: 'Chat',

      },
      ],


      index: 0,
      txtChef_Follow: 'Follow1',
      DishFollowing: 'Follow'

    }
  }

  static navigationOptions = ({
    header: <View style={{ backgroundColor: '#841314', height: 50, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 22, fontWeight: '500' }}>My Cocina
    </Text></View>,

    headerStyle: {
      backgroundColor: '#841314',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 22
    },
  })


  componentWillMount(){
    this.getUserName();
   
}
  
//Get userName,userRole from async method -
  async getUserName(){
    const value =  await AsyncStorage.getItem('userNameCocina');
    const roleValue =  await AsyncStorage.getItem('userRoleCocina');
    this.setState({userNameValue : value, userRole: roleValue});
    //alert("userName"+this.state.userNameValue + this.state.userRole)
  }

  headingOneDish() {
    return (
      <TabHeading
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderBottomWidth: 5,
          borderColor: "white"
        }}
      >
        <Text
          fontSize={14}
          style={{
            color: "#98A2AB",
            textAlign: 'center'
          }}
        >
          DISH
    </Text>
      </TabHeading>
    );
  }

  headingTwoCHef() {
    return (
      <TabHeading
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderBottomWidth: 5,
          borderColor: "white"
        }}
      >
        <Text
          fontSize={14}
          style={{
            color: "#98A2AB",
            textAlign: 'center'
          }}
        >
          CHEF
        </Text>
      </TabHeading>
    );
  }


  headingThreeCusin() {
    return (
      <TabHeading
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderBottomWidth: 5,
          borderColor: "white"
        }}
      >
        <Text
          fontSize={14}
          style={{
            color: "#98A2AB",
            textAlign: 'center'
          }}
        >
          CUISINE
            </Text>
      </TabHeading>
    );
  }


  renderItem = ({ item, index }) => {
    return (

      <TouchableOpacity
      // onPress={() => this.props.navigation.navigate('DishDetail', {
      //     dishDetail: this.state.arr
      // })}
      >
        {/* <View style={{flex:1,flexDirection:'row',backgroundColor:'green'}}> */}
        <Card style={Style.renderItemStyle}>

          <View style={{ flex: 1, marginRight: 10 }}>
            <View style={{ marginRight: 10, backgroundColor: 'pink' }}>
              <Image source={item.imageDish} style={Style.imageDishtyle}>

              </Image>
              <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', top: 50, backgroundColor: 'rgba(242,243,244,0.8)', margin: 10 }}>
                <View style={{ flex: 0.5, height: 30, justifyContent: 'center', marginLeft: 10 }}>
                  <Text style={{ color: 'black', fontSize: 12 }}>Available: 1pm-5pm</Text>
                </View>
                <View style={{ flex: 0.6, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'black', fontSize: 12, }}>Accepts Orders Until: 11am</Text>
                </View>
              </View>
            </View>

            {/* <View style={{ flex: .2, flexDirection: 'row', marginTop: 10 }}> */}

            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: .5, height: 40, justifyContent: 'center', marginLeft: 10 }}>
                <Text style={{ color: '#696969', fontSize: 14 }}>{item.txtMeal}</Text>
              </View>


              <View style={{ flex: .5, height: 40, justifyContent: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 12 }} >{item.txtSingle}</Text>
              </View>

            </View>


            {/* </View> */}

          </View>
          {/* </View> */}
        </Card>
      </TouchableOpacity>
    )
  }


  AcceptMethod(index) {
    if (index == 0) {
      visible: !this.state.visible
    }

  }

  renderItemOrders = ({ item, index }) => {
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
          <View style={{ height: 60, flexDirection: 'row', backgroundColor: '#F0F8FF', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', height: 40, flex: .8, backgroundColor: '#b5803b', marginLeft: 20, borderRadius: 5 }}>
              <Text style={{ marginLeft: 20, marginRight: 10, color: 'white' }}>Ordered:Today, 11am</Text>

            </View>
            <View style={{ justifyContent: 'center', height: 40, flex: .8, backgroundColor: '#b5803b', marginLeft: 10, marginRight: 20, borderRadius: 5 }}>
              <Text style={{ marginLeft: 10, marginRight: 10, color: 'white' }}>Deliver: Today, 4:30pm</Text>

            </View>
          </View>

          <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', height: 50 }}>
              <Text>{item.txtItem2}</Text>
            </View>

            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 12 }}>{item.txtMealname}</Text>
              <Text style={{ fontSize: 10 }}>{item.txtSingle1}</Text>
              <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 10 }}>{item.txtSpecial}</Text>
              </View>
            </View>

            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontSize: 12 }}>{item.txtDollar}</Text>
            </View>
          </View>


          <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', height: 50 }}>
              <Text>{item.txtItem}</Text>
            </View>

            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 12 }}>{item.txtMealname}</Text>
              <Text style={{ fontSize: 10 }}>{item.txtFamily}</Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 12 }}>{item.txtDollar1}</Text>

            </View>
          </View>


          {this.state.visible == true ?

            <View style={{ height: 50, justifyContent: "center", marginLeft: 10, color: 'white' }}>
              <View style={{ flex: .7, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>

                <View style={{ flex: .3 }}>
                  <TouchableOpacity onPress={() => this.AcceptMethod()} style={{ height: 30, backgroundColor: '#82e480' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={item.imgAccept} style={{ height: 20, width: 20, alignItems: 'center', top: 5 }}></Image>
                      <Text style={{ top: 5 }}>{item.txtAccept}</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 10, flex: .3 }}>
                  <TouchableOpacity style={{ height: 30, backgroundColor: '#d84454', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>

                      <Image source={item.imgdecline} style={{ height: 20, width: 20, alignItems: 'center', top: 5 }}></Image>

                      <Text style={{ top: 5 }}>{item.txtDecline}</Text>
                    </View>

                  </TouchableOpacity>

                </View>
                <View style={{ marginLeft: 10, flex: .3 }}>
                  <TouchableOpacity style={{ height: 30, backgroundColor: '#b5803b', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>

                      <Image source={item.imgdechat} style={{ height: 20, width: 20, alignItems: 'center', top: 5 }}></Image>

                      <Text style={{ top: 5 }}>{item.txtchat}</Text>
                    </View>

                  </TouchableOpacity>

                </View>


              </View>
            </View>
            :

            <View style={{ height: 50, justifyContent: "center", marginLeft: 10, color: 'white' }}>
              <View style={{ flex: .7, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>

                <View style={{ flex: .3 }}>
                  <TouchableOpacity style={{ height: 30, backgroundColor: '#82e480' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={item.imgAccept} style={{ height: 20, width: 20, alignItems: 'center', top: 5 }}></Image>
                      <Text style={{ top: 5 }}>Start</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 10, flex: .3 }}>
                  <TouchableOpacity style={{ height: 30, backgroundColor: '#b5803b', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>

                      <Image source={item.imgdechat} style={{ height: 20, width: 20, alignItems: 'center', top: 5 }}></Image>

                      <Text style={{ top: 5 }}>Chat</Text>
                    </View>

                  </TouchableOpacity>

                </View>


                <View style={{ marginLeft: 10, flex: .3 }}>
                  <TouchableOpacity style={{ height: 30, backgroundColor: '#d84454', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>

                      <Image source={item.imgdecline} style={{ height: 20, width: 20, alignItems: 'center', top: 5 }}></Image>

                      <Text style={{ top: 5 }}>Cancel</Text>
                    </View>

                  </TouchableOpacity>

                </View>

              </View>
            </View>
          }

        </Card>
      </View>
    );
  }






  headingOne() {
    return (
      <TabHeading
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderBottomWidth: 5,
          borderColor: "white"
        }}
      >
        <TouchableOpacity onPress={() => this.HideDishScreen()}>
          <Text
            fontSize={14}
            style={{
              color: "#98A2AB",
              textAlign: 'center'
            }}
          >
            MENU
    </Text>
        </TouchableOpacity>
      </TabHeading>
    );
  }

  headingTwo() {
    return (
      <TabHeading
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderBottomWidth: 5,
          borderColor: "white"
        }}
      >
        <Text
          fontSize={14}
          style={{
            color: "#98A2AB",
            textAlign: 'center'
          }}
        >
          ORDERS
        </Text>
      </TabHeading>
    );
  }


  headingThree() {
    return (
      <TabHeading
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderBottomWidth: 5,
          borderColor: "white"
        }}
      >
        <Text
          fontSize={14}
          style={{
            color: "#98A2AB",
            textAlign: 'center'
          }}
        >
          SCHEDULE
            </Text>

      </TabHeading>
    );
  }

  HideDishScreen() {
    this.setState({
      visibleDish: !this.state.visibleDish
    })
  }






  renderItem1({ item }) {
    return (
      <View style={{ flex: 1 }} >
        <Card style={{ flex: 1, marginLeft: 10, backgroundColor: '#ECF0F1' }}>
          <View style={{ flex: 1 }}>
            <View>

            </View>

            <View style={{ flexDirection: 'row', marginLeft: 10, top: 10 }}>
              <Image source={item.imageMarker} resizeMode="contain" style={{ height: 15, width: 15 }}></Image>

              <Text style={{ color: 'grey', fontSize: 12 }}>{item.txtSingle}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', margin: 10, top: 10 }}>
              <View style={{ flex: 0.3 }}>
                <Image source={item.imageparttime} style={{ height: 60, width: 80 }}></Image>
                <Text style={{ fontSize: 8 }}>{item.txtMealname}</Text>
                <Text style={{ fontSize: 8 }}>{item.txtSingle1}</Text>

              </View>
              <View style={{ flex: 0.3 }}>
                <Image source={item.imageparttime} style={{ height: 60, width: 80, marginLeft: 5 }}></Image>
                <Text style={{ fontSize: 8, marginLeft: 10 }}>{item.txtMealname}</Text>
                <Text style={{ fontSize: 8, marginLeft: 10 }}>{item.txtFamily}</Text>

              </View>

              <View style={{ flex: 0.3 }}>
                <Image source={item.imageparttime} style={{ height: 60, width: 80, marginLeft: 10 }}></Image>
                <Text style={{ fontSize: 8, marginLeft: 10 }}>{item.txtMealname}</Text>
                <Text style={{ fontSize: 8, marginLeft: 10 }}>{item.txtSingle1}</Text>

              </View>

            </View>
            <View style={{ flexDirection: 'row', flex: .3, justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, marginBottom: 5 }}>
              <View >
                <TouchableOpacity style={{ backgroundColor: '#841314', width: 90 }}><Text style={{ color: 'white', textAlign: 'center' }}>Reorder</Text></TouchableOpacity>

              </View>
              <View style={{ marginLeft: 20, justifyContent: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: '#841314', width: 90 }}><Text style={{ color: 'white', textAlign: 'center' }}>Rate</Text></TouchableOpacity>
              </View>

            </View>


          </View>
        </Card>
      </View>
    );
  }







  renderItemChef = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Card>

          <View style={Style.barbaraChefView}>
            <View style={Style.chefImageView} >
              <Image source={item.imageChef_Mycocino} style={Style.ChefImageStyle}></Image>
            </View>

            <View style={Style.babaraTextView} >
              <Text style={{ fontSize: 12, top: 10 ,color:'#696969'}}>{item.txtname_Mycocino}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image source={item.imageMarker_Mycocino} resizeMode="contain" style={Style.markerImageStyle}></Image>
                <Text style={{ fontSize: 8, top: 10 }}>{item.txtmiles_Mycocino}</Text>
              </View>

            </View>


            <View style={{ flex: 0.4, justifyContent: 'center', justifyContent: 'center' }}>
              <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12, textAlign: 'center' }}>{item.txtReview1_Mycocino}</Text>

            </View>

            <View style={{ flex: 0.4, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.FollowChefmethod()} style={{ backgroundColor: '#841314', width: 70, height: 20, justifyContent: 'center' }}>
                <Text style={Style.reviewtxtSTyle}>{this.state.txtChef_Follow}</Text>
              </TouchableOpacity>

            </View>

          </View>

        </Card>

      </View>
    );
  }


  FollowChefmethod() {
    this.setState({
      DishFollowing: 'Following'
    })
  }

  ChefRegistrationMethod() {
    this.props.navigation.navigate('ChefRegistration')
  }

  SecondScreen() {
    this.setState(
      {
        visible: !this.state.visible
      }
    )
  }
  render() {
    const {userNameValue, userRole} = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 1, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.SecondScreen()} style={{ flexDirection: 'row' }} >

            <View style={{ flex: 0.23, alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 30, height: 38, width: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b5803b', borderColor: '#b5803b' }}>
                <Text style={{ color: 'white', fontWeight: '400', fontSize: 20 }}>R</Text>
              </View>
            </View>

            <View style={{ flex: 0.6, height: 40, justifyContent: 'center' }}>
              <TouchableOpacity>
                <Text>Welcome,{userNameValue}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 0.1, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ChefRegistration')}>
                <Image source={require('../../../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')}
                  style={{ height: 20, width: 20 }}></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSetting')}>
                <Image source={require('../../../BottomBarScreens/Assets/MycocinoMenuImage/settings-work.png')}
                  style={{ height: 20, width: 20 }}>
                </Image>

              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {this.state.visible == false ?
          <Tabs
            initialPage={this.state.index}
            tabBarUnderlineStyle={{
              backgroundColor: '#b5803b'
            }}
            // tabContainerStyle={{
            // elevation:0
            // }}
            locked
          >


            <Tab
              heading={this.headingOne()}
              tabStyle={{
                backgroundColor: '#fff'
              }}>

              <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: 'lightgrey' }}>
                <View style={{ flex: .9, height: 50, justifyContent: 'center', marginLeft: 10 }}>
                  <Text style={{ fontSize: 14, color: '#b5803b' }}>Add New Dish To Menu</Text>
                </View>
                <View style={{ flex: .1, height: 50, justifyContent: 'center', marginRight: 10 }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('YourCocinaDishDetail')}>
                    <Image source={require('../../../../Screens/BottomBarScreens/Assets/AddIcon.png')} style={{ height: 25, width: 25 }}></Image>
                  </TouchableOpacity>
                </View>
              </View>


              <FlatList
                data={this.state.arr}
                renderItem={this.renderItem}

              />

              {/* <Carousel
            data={this.state.arr}

            renderItem={this.renderItem}

            sliderWidth={400}
            inactiveSlideScale={1}
            itemWidth={300}
            nactiveSlideOpacity={1}
            enableMomentum={false}
            loop={false}
            activeSlideAlignment={'start'}
          
          /> */}

            </Tab>

            <Tab
              heading={this.headingTwo()}
              tabStyle={{
                backgroundColor: '#fff'
              }}
            >


              <FlatList
                data={this.state.arrOrders}
                renderItem={this.renderItemOrders}
              />

            </Tab>




            <Tab
              heading={this.headingThree()}
              tabStyle={{
                backgroundColor: '#fff'
              }}
            >
              <ScrollView>
                <View style={{ height: 350 }}>
                  <Text style={{ alignSelf: 'center', color: 'black' }}>Calender</Text>
                  <Calendar style={{ margin: 10 }}
                    currentMonth={'2015-08-01'} 
                  />
                </View>
                <View>
                  <TouchableOpacity style={{ width: 200, backgroundColor: '#b5803b', height: 40, justifyContent: 'center', marginLeft: 20 }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Dish Available: Today</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: 'lightgrey' }}>
                  <View style={{ flex: .9, height: 50, justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, color: '#b5803b' }}>Add New Dish To Menu</Text>
                  </View>
                  <View style={{ flex: .1, height: 50, justifyContent: 'center', marginRight: 10 }}>
                    <TouchableOpacity >
                      <Image source={require('../../../../Screens/BottomBarScreens/Assets/AddIcon.png')} style={{ height: 25, width: 25 }}></Image>
                    </TouchableOpacity>
                  </View>
                </View>



                <FlatList
                  data={this.state.arr}
                  renderItem={this.renderItem} />
              </ScrollView>
            </Tab>
          </Tabs>
          : null}



        <View style={{ flex: .1, borderBottomColor: 'lightgrey', borderBottomWidth: 1, justifyContent: 'center' }}>
          <Text style={{ marginLeft: 20 }}>Past Orders</Text>
        </View>
        {this.state.visibleDish == true ?
          <View style={{ flex: 1, borderBottomColor: 'lightgrey', borderBottomWidth: 1, justifyContent: 'center', marginBottom: 5 }}>

            <Tabs
              initialPage={this.state.index}
              tabBarUnderlineStyle={{
                backgroundColor: '#b5803b'
              }}

              locked
            >

              <Tab
                heading={this.headingOneDish()}
                tabStyle={{
                  backgroundColor: '#fff'
                }}
              >
                <ScrollView>
                  <View style={{ flex: .70 }}>
                    <Carousel
                      data={this.state.arrData}

                      renderItem={({ item }) => {
                        return (
                          <View>

                            <View style={{ flex: 1 }} >
                              <Card style={{ flex: 1, marginLeft: 10, backgroundColor: '#ECF0F1' }}>

                                <View style={{ flex: 1 }}>
                                  <View style={{ flex: .5, flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ flex: 0.25, marginLeft: 10 }} >
                                      <Image resizeMode='contain' source={item.imageCheftCart} style={{ height: 40, width: 40, top: 10 }}></Image>
                                    </View>

                                    <View style={{ flex: 0.5, justifyContent: 'center' }} >
                                      <Text style={{ fontSize: 12, top: 10 }}>{item.txtname}</Text>
                                      <View style={{ flexDirection: 'row' }}>
                                        <Image source={item.imageMarker} resizeMode="contain" style={{ height: 10, width: 15, top: 10 }}></Image>
                                        <Text style={{ fontSize: 8, top: 10 }}>{item.txtmiles}</Text>
                                      </View>

                                    </View>


                                    <View style={{ flex: 0.25, justifyContent: 'center' }}>
                                      <TouchableOpacity style={{ borderColor: '#841314', borderWidth: 1 }}>
                                        <Text style={{ color: '#841314', fontSize: 12, textAlign: 'center' }}>{this.state.DishFollowing}</Text>
                                      </TouchableOpacity>
                                    </View>
                                  </View>

                                  <View style={{ flexDirection: 'row', marginLeft: 10, top: 10 }}>
                                    <Image source={item.imageMarker} resizeMode="contain" style={{ height: 15, width: 15 }}></Image>

                                    <Text style={{ color: 'grey', fontSize: 12 }}>{item.txtSingle}</Text>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: 'row', margin: 10, top: 10 }}>
                                    <View style={{ flex: 0.3 }}>
                                      <Image source={item.imageparttime} style={{ height: 60, width: 80 }}></Image>
                                      <Text style={{ fontSize: 8 }}>{item.txtMealname}</Text>
                                      <Text style={{ fontSize: 8 }}>{item.txtSingle1}</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                      <Image source={item.imageparttime} style={{ height: 60, width: 80, marginLeft: 10 }}></Image>
                                      <Text style={{ fontSize: 8, marginLeft: 10 }}>{item.txtMealname}</Text>
                                      <Text style={{ fontSize: 8, marginLeft: 20 }}>{item.txtFamily}</Text>

                                    </View>

                                    <View style={{ flex: 0.3 }}>
                                      <Image source={item.imageparttime} style={{ height: 60, width: 80, marginLeft: 17 }}></Image>
                                      <Text style={{ fontSize: 8, marginLeft: 10 }}>{item.txtMealname}</Text>
                                      <Text style={{ fontSize: 8, marginLeft: 20 }}>{item.txtSingle1}</Text>

                                    </View>

                                  </View>
                                  <View style={{ flexDirection: 'row', flex: .3, justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, marginBottom: 5 }}>
                                    <View >
                                      <TouchableOpacity style={{ backgroundColor: '#841314', width: 90 }}><Text style={{ color: 'white', textAlign: 'center' }}>Reorder</Text></TouchableOpacity>

                                    </View>
                                    <View style={{ marginLeft: 20, justifyContent: 'center' }}>

                                      <TouchableOpacity style={{ backgroundColor: '#841314', width: 90 }}><Text style={{ color: 'white', textAlign: 'center' }}>Rate</Text></TouchableOpacity>
                                    </View>

                                  </View>


                                </View>
                              </Card>
                            </View>
                          </View>
                        );
                      }}

                      sliderWidth={400}
                      inactiveSlideScale={1}
                      itemWidth={300}
                      nactiveSlideOpacity={1}
                      enableMomentum={false}
                      loop={false}
                      activeSlideAlignment={'start'}

                    />

                  </View>

                  <View style={{ height: 80 }}>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20, marginBottom: 5 }}>
                      <Text>Allergies</Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('AllergiesScreen')}>
                        <Image source={require('../../../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')}
                          resizeMode='contain' style={{ height: 15, width: 15, marginLeft: 5 }}></Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                      <Text style={{ borderColor: '#b5803b', borderWidth: 1, marginLeft: 20, color: '#b5803b', marginBottom: 20 }}>Egg</Text>
                      <Text style={{ borderColor: '#b5803b', borderWidth: 1, marginLeft: 10, color: '#b5803b', marginBottom: 20 }}>Peppercorn</Text>
                      <Text style={{ borderColor: '#b5803b', borderWidth: 1, marginLeft: 10, color: '#b5803b', marginBottom: 20 }}>Cheddar</Text>
                    </View>

                  </View>


                  {userRole != 'chef' ? <View style={{ height: 50, backgroundColor: '#F8F8F8' }}>

                  </View> : null}
                      
                    {userRole != 'chef' ?
                  <View style={{ height: 70, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 0.3, alignItems: 'center' }}>
                      <Image source={require('../../../BottomBarScreens/Assets/MycocinoMenuImage/Circlelogo.png')}
                        resizeMode="contain"
                        style={{ height: 60, width: 60 }}
                      ></Image>
                    </View>
                    <View style={{ flex: .7 }}>
                      <TouchableOpacity onPress={() => this.ChefRegistrationMethod()} >
                        <Text style={{ fontSize: 12, color: '#830000' }}>Are You a Chef?</Text></TouchableOpacity>
                      <Text style={{ fontSize: 12, color: '#b5803b' }}>Why not join the Comfort Cocina family?</Text>
                    </View>
                  </View> : null}
                </ScrollView>
              </Tab>


              <Tab

                heading={this.headingTwoCHef()}
                tabStyle={{
                  backgroundColor: '#fff'
                }}
              >
                <ScrollView style={{ flex: 1 }}>
                  <FlatList

                    data={this.state.arrMycocinaChef}
                    renderItem={this.renderItemChef}

                  />
                  <View style={{ flex: .70 }}>
                    <Carousel
                      data={this.state.arrData}

                      renderItem={this.renderItem1}

                      sliderWidth={400}
                      inactiveSlideScale={1}
                      itemWidth={300}
                      nactiveSlideOpacity={1}
                      enableMomentum={false}
                      loop={false}
                      activeSlideAlignment={'start'}

                    />

                  </View>
                  <View style={{ height: 80 }}>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20, marginBottom: 5 }}>
                      <Text>Allergies</Text>
                      <TouchableOpacity>
                        <Image source={require('../../../BottomBarScreens/Assets/MycocinoMenuImage/pencil_editButton.png')}
                          resizeMode='contain' style={{ height: 15, width: 15, marginLeft: 5 }}></Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                      <Text style={{ borderColor: '#b5803b', borderWidth: 1, marginLeft: 20, color: '#b5803b', marginBottom: 20 }}>Egg</Text>
                      <Text style={{ borderColor: '#b5803b', borderWidth: 1, marginLeft: 10, color: '#b5803b', marginBottom: 20 }}>Peppercorn</Text>
                      <Text style={{ borderColor: '#b5803b', borderWidth: 1, marginLeft: 10, color: '#b5803b', marginBottom: 20 }}>Cheddar</Text>
                    </View>

                  </View>
                  <View style={{ height: 50, backgroundColor: '#F8F8F8' }}>

                  </View>

                  <View style={{ height: 70, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 0.3, alignItems: 'center' }}>
                      <Image source={require('../../../BottomBarScreens/Assets/MycocinoMenuImage/Circlelogo.png')}
                        resizeMode="contain"
                        style={{ height: 60, width: 60 }}
                      ></Image>
                    </View>
                    <View style={{ flex: .7 }}>
                      <TouchableOpacity onPress={() => this.ChefRegistrationMethod()} onClick={() => this.ChefRegistrationMethod()}>
                        <Text style={{ fontSize: 12, color: '#830000' }}>Are You a Chef?</Text>
                      <Text style={{ fontSize: 12, color: '#b5803b' }}>Why not join the Comfort Cocina family?</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>

              </Tab>



              <Tab
                heading={this.headingThreeCusin()}
                tabStyle={{
                  backgroundColor: '#fff'
                }}
              ><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size='large' />
                </View>
              </Tab>

            </Tabs>

          </View> : null}
      </View>
    );
  }
}