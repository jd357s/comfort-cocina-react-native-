import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,FlatList,ImageBackground,TouchableOpacity,Image,ActivityIndicator} from 'react-native';

import { Card, Tab, Tabs, TabHeading } from 'native-base'
import Style from './FavoritesStyle'
export default class Favorites extends Component {

constructor(props)
{
  super(props)
  this.state={
    index: 0,
    arr: [{
      imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
      txtReview: '5 Reviews',
      imageDish: require('../../../Assets/DishImages/burger.jpg'),
      txtMeal: 'Fritata Peppercorn',
      imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
      txtmiles: '3.1 miles',
      txtSingle: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
      txtfamily:'/family',txtDollar2:'$45.99'
  },
  {
    imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
    txtReview: '5 Reviews',
    imageDish: require('../../../Assets/DishImages/chicken.jpg'),
    txtMeal: 'Civeche',
    imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
    txtmiles: '3.1 miles',
    txtSingle: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
    txtfamily:'/family',txtDollar2:'$45.99'
},

{
    imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
    txtReview: '5 Reviews',
    imageDish: require('../../../Assets/DishImages/gettyimage.jpg'),
    txtMeal: 'Civeche',
    imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
    txtmiles: '3.1 miles',
    txtSingle: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
      txtfamily:'/family',txtDollar2:'$45.99'
},


{
    imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
    txtReview: '5 Reviews',
    imageDish: require('../../../Assets/DishImages/macroni.jpeg'),
    txtMeal: 'Civeche',
    imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
    txtmiles: '3.1 miles',
    txtSingle: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
    txtfamily:'/family',txtDollar2:'$45.99'
},


{
    imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
    txtReview: '5 Reviews',
    imageDish: require('../../../Assets/DishImages/noodle.jpeg'),
    txtMeal: 'Civeche',
    imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
    txtmiles: '3.1 miles',
    txtSingle: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
    txtfamily:'/family',txtDollar2:'$45.99'
}
]
  }
}




    static navigationOptions=({
        header:<View style={{backgroundColor:'#841314',height:50,alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff',fontSize:22,fontWeight:'600'}}>Favorites</Text></View>,
     headerLeft:null,
        headerStyle: {
            backgroundColor: '#841314',
            
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize:22
          },
    })



    renderItem = ({ item, index }) => {
      return (
          <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('DishDetail', {
              //     dishDetail: this.state.arr
              // })}
              >
              {/* <View style={{flex:1,flexDirection:'row',backgroundColor:'green'}}> */}
              <Card style={Style.renderItemStyle}>
                  <View style={{ flex: 0.2,height:150}}>
                      <View style={{ fle: 0.3 }}>

                      </View>
                      <View style={{ flex: .65,alignItems:'center',top:20 ,justifyContent:'center'}}>
                          <Image source={item.imageChef} style={Style.renderitemChefimageStyle}></Image>

                      </View>
                      <View style={{  flex: .45,alignItems:'center'}}>
                          <Text style={{ fontSize: 13, color: 'black',marginLeft:10 }}>{item.txtname}</Text>
                          <Text style={{color:'#b5803b',marginLeft:10,fontSize:17}}>*****</Text>
                          <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12 ,marginLeft:10}}>{item.txtReview}</Text>
                      </View>


                  </View>
                  <View style={{ flex: 0.8, marginRight: 10 }}>
                      <View style={{marginRight: 10, backgroundColor: 'pink' }}>
                          <ImageBackground source={item.imageDish}  style={Style.imageDishtyle}>

                              <View style={{ alignItems: 'flex-end', marginRight: 10, }}>
                                  <TouchableOpacity onPress={() => this.setState({ visible: this.state.visible })} style={{ width: 20 }}>
                                      {this.state.visible == false ?
                                          <Image source={require('../../../Assets/DishImages/heartGreen.png')} style={{ height: 20, width: 20 }}></Image>
                                          : <Image source={require('../../../Assets/DishImages/heartRed.png')} style={{ height: 20, width: 20 }}></Image>

                                      }</TouchableOpacity>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'flex-end',top:35,height:30, backgroundColor: 'rgba(242,243,244,0.8)', margin: 10 }}>
                                    <View style={{ flex: 0.5,justifyContent:'center' }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Available: 1pm-5pm</Text>
                                    </View>
                                    <View style={{ flex: 0.6,justifyContent:'center' }}>
                                        <Text style={{ color: 'black', fontSize: 12, }}>Accepts Orders Until: 11am</Text>
                                    </View>
                                </View>
                          </ImageBackground>

                      </View>

                      <View style={{ flex: .2, flexDirection: 'row', marginTop: 10 }}>

                          <View style={{ flex: 0.7 }}>

                        <View>
                                        <Text style={Style.txtstyle}>{item.txtMeal}</Text>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar1}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >{item.txtSingle}</Text>
                                     
                                        </View>
                                     
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar2}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >{item.txtfamily}</Text>
                                     
                                        </View>
                                        </View>
                                    </View>
                              

                          
                      </View>
                      <View style={{ flex: .3 }}>
                              <View style={{ flexDirection: 'row' }}>
                                  <Image source={item.imageMarker} style={{ height: 15, width: 15 }}></Image>
                                  <Text style={{ color: 'grey', fontSize: 10 }}>{item.txtmiles}</Text>
                              </View>

                              <View  style={{marginLeft:10}}>
                                <Text style={{ color: 'grey', fontSize: 13}}>{item.txtlanguage}</Text>
                                </View>
                          </View>
                  </View>
                  </View>
                  {/* </View> */}
              </Card>
          </TouchableOpacity>
      )
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
                CHEF
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
                CUSIN
            </Text>
        </TabHeading>
    );
}


  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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
                     



                         <FlatList
                            data={this.state.arr}
                            renderItem={this.renderItem} /> 


                       
                    </Tab>

                    <Tab
                        heading={this.headingTwo()}
                        tabStyle={{
                            backgroundColor: '#fff'
                        }}
                    >
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <ActivityIndicator size='large'/></View>
                    </Tab>




                    <Tab
                        heading={this.headingThree()}
                        tabStyle={{
                            backgroundColor: '#fff'
                        }}
                    >
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <ActivityIndicator size='large'/></View>
                    </Tab>
                </Tabs>

      </View>
    );
  }
}