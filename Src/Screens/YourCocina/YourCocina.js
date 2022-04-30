import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import { Card, Tab, Tabs, TabHeading } from 'native-base'
import Style from './yourcocinastyle';

export default class YourCocinaMenu extends Component {




    static navigationOptions = ({
        title: 'Your Cocina',

        // headerLeft: <TouchableOpacity  ><Image source={require('../../Assets/SignUpImage/leftarrow.png')} style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>,
        headerRight:'',
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginLeft:50,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });







    constructor(props) {
        super(props)
        {
            this.state = {
                index: 0,
               visible:false,
               
                arr: [{
                    imageDish: require('../../Assets/DishImages/burger.jpg'),
                    txtMeal: 'Fritata Peppercorn',
                    txtSingle: '$10.99/Single  $45.99/Family',
                },

                {
                    imageDish: require('../../Assets/DishImages/chicken.jpg'),
                    txtMeal: 'Civeche',
                    txtSingle: '$10.99/Single  $45.99/Family',
                },
                {
                    imageDish: require('../../Assets/DishImages/pizza.jpeg'),
                    txtMeal: 'Civeche',
                    txtSingle: '$10.99/Single  $45.99/Family',
                },
                {
                    imageDish: require('../../Assets/DishImages/burger.jpg'),
                    txtMeal: 'Fritata Peppercorn',
                    txtSingle: '$10.99/Single  $45.99/Family',
                },

                {
                    imageDish: require('../../Assets/DishImages/chicken.jpg'),
                    txtMeal: 'Civeche',
                    txtSingle: '$10.99/Single  $45.99/Family',
                },
                {
                    imageDish: require('../../Assets/DishImages/pizza.jpeg'),
                    txtMeal: 'Civeche',
                    txtSingle: '$10.99/Single  $45.99/Family',
                },

                ],
                arrOrders: [{
                    imageCheftCart: require('../../Screens/BottomBarScreens/Assets/cartImages/womanImage.png'),
                    txtname: 'Barbara',
                    txtmiles: '3.1 miles',
                    txtReview: '5 Reviews',
                    imageMarker: require('../../Screens/BottomBarScreens/Assets/cartImages/mapIcon.png'),
                    txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
                    txtTime: '', txtDate: '',
                    txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
                    txtSingle1: '$10.99/Single',
                    txtFamily: '$45.99/Family',
                    txtDollar: '$21.98',
                    txtDollar1: '$45.99',
                    txtButton: 'Add Items',
                    imgAccept:require('../../Screens/BottomBarScreens/Assets/AllergyImage/okDelte.png'),
                    txtAccept:'Accept',
                    imgdecline:require('../../Screens/BottomBarScreens/Assets/AllergyImage/cancelicon.png'),
                    txtDecline:'Decline',
                    imgdechat:require('../../Screens/BottomBarScreens/Assets/AllergyImage/chatIcon.png'),
                    txtchat:'Chat',
                  },
                
                    {
                        imageCheftCart: require('../../Screens/BottomBarScreens/Assets/cartImages/womanImage.png'),
                        txtname: 'Barbara',
                        txtmiles: '3.1 miles',
                        txtReview: '5 Reviews',
                        imageMarker: require('../../Screens/BottomBarScreens/Assets/cartImages/mapIcon.png'),
                        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
                        txtTime: '', txtDate: '',
                        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
                        txtSingle1: '$10.99/Single',
                        txtFamily: '$45.99/Family',
                        txtDollar: '$21.98',
                        txtDollar1: '$45.99',
                        txtButton: 'Add Items',
                        txtSpecial:'special Instructions; no tomato,pleasue',
                        imgAccept:require('../../Screens/BottomBarScreens/Assets/AllergyImage/okDelte.png'),
                        txtAccept:'Accept',
                        imgdecline:require('../../Screens/BottomBarScreens/Assets/AllergyImage/cancelicon.png'),
                        txtDecline:'Decline',
                        imgdechat:require('../../Screens/BottomBarScreens/Assets/AllergyImage/chatIcon.png'),
                        txtchat:'Chat',
                      
                      },
                      {
                        imageCheftCart: require('../../Screens/BottomBarScreens/Assets/cartImages/womanImage.png'),
                        txtname: 'Barbara',
                        txtmiles: '3.1 miles',
                        txtReview: '5 Reviews',
                        imageMarker: require('../../Screens/BottomBarScreens/Assets/cartImages/mapIcon.png'),
                        txtSingle: 'delivery/pick up address', txtlanguage: 'Spanish',
                        txtTime: '', txtDate: '',
                        txtItem: '1', txtItem2: '2', txtMealname: 'Fridata Peppercorn',
                        txtSingle1: '$10.99/Single',
                        txtFamily: '$45.99/Family',
                        txtDollar: '$21.98',
                        txtDollar1: '$45.99',
                        txtButton: 'Add Items',
                        imgAccept:require('../../Screens/BottomBarScreens/Assets/AllergyImage/okDelte.png'),
                        txtAccept:'Accept',
                        imgdecline:require('../../Screens/BottomBarScreens/Assets/AllergyImage/cancelicon.png'),
                        txtDecline:'Decline',
                        imgdechat:require('../../Screens/BottomBarScreens/Assets/AllergyImage/chatIcon.png'),
                        txtchat:'Chat',
                        
                      },
                ]

            }
        }
    }

    static navigationOptions = ({
        header: <View style={{ backgroundColor: '#841314', height: 50, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>Favorites</Text></View>,
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 22
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

                        <View style={{flexDirection: 'row' }}>

                            <View style={{flex:.5,height:40,justifyContent:'center',marginLeft:10}}>
                                <Text style={{ color: 'black', fontSize: 14 }}>{item.txtMeal}</Text>
                            </View>


                            <View style={{flex:.5,height:40,justifyContent:'center'}}>
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


    AcceptMethod(index)
    {
        if(index==0)
        {
            visible=true
        }
       
    }

    renderItemOrders = ({ item ,index}) => {
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
            <View style={{height:60, flexDirection: 'row',backgroundColor:'#F0F8FF',alignItems:'center'}}>
            <View style={{justifyContent:'center',height:40,flex:.8, backgroundColor: '#b5803b',marginLeft:20,borderRadius:5}}>
            <Text style={{ marginLeft: 20, marginRight: 10, color: 'white'}}>Ordered:Today, 11am</Text>

            </View>
            <View style={{justifyContent:'center',height:40,flex:.8, backgroundColor: '#b5803b',marginLeft:10,marginRight:20,borderRadius:5}}>
            <Text style={{ marginLeft: 10, marginRight: 10, color: 'white'}}>Deliver: Today, 4:30pm</Text>

            </View>
            </View>
    
            <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
              <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' ,height:50}}>
                <Text>{item.txtItem2}</Text>
              </View>
    
              <View style={{ flex: 0.5 ,justifyContent:'center'}}>
                <Text style={{ fontSize: 12 }}>{item.txtMealname}</Text>
                <Text style={{ fontSize: 10 }}>{item.txtSingle1}</Text>
                <View style={{ flex: 0.5}}>
             <Text style={{fontSize:10}}>{item.txtSpecial}</Text>
             </View>
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
    

    {this.state.visible==false ? 
    
            <View style={{ height: 50, justifyContent: "center", marginLeft: 10, color: 'white' }}>
            <View style={{ flex:.7,flexDirection: 'row',marginLeft:10,alignItems:'center'}}>

<View style={{flex:.3}}>
    <TouchableOpacity onPress={()=>this.AcceptMethod()} style={{height:30,backgroundColor:'#82e480'}}>
   <View style={{flexDirection:'row'}}>
    <Image source={item.imgAccept} style={{height:20,width:20,alignItems:'center',top:5}}></Image>
     <Text style={{top:5}}>{item.txtAccept}</Text>
    </View>
    </TouchableOpacity>
</View>

<View style={{marginLeft:10,flex:.3}}>
    <TouchableOpacity style={{height:30,backgroundColor:'#d84454',alignItems:'center'}}>
    <View style={{flexDirection:'row'}}>

    <Image source={item.imgdecline} style={{height:20,width:20,alignItems:'center',top:5}}></Image>

    <Text style={{top:5}}>{item.txtDecline}</Text>
    </View>
    
    </TouchableOpacity>

</View>
<View style={{marginLeft:10,flex:.3}}>
    <TouchableOpacity style={{height:30,backgroundColor:'#b5803b',alignItems:'center'}}>
    <View style={{flexDirection:'row'}}>

    <Image source={item.imgdechat} style={{height:20,width:20,alignItems:'center',top:5}}></Image>

    <Text style={{top:5}}>{item.txtchat}</Text>
    </View>
    
    </TouchableOpacity>

</View>


</View>
            </View> 
             : 

            <View style={{ height: 50, justifyContent: "center", marginLeft: 10, color: 'white' }}>
            <View style={{ flex:.7,flexDirection: 'row',marginLeft:10,alignItems:'center'}}>

<View style={{flex:.3}}>
    <TouchableOpacity style={{height:30,backgroundColor:'#82e480'}}>
   <View style={{flexDirection:'row'}}>
    <Image source={item.imgAccept} style={{height:20,width:20,alignItems:'center',top:5}}></Image>
     <Text style={{top:5}}>Start</Text>
    </View>
    </TouchableOpacity>
</View>

<View style={{marginLeft:10,flex:.3}}>
    <TouchableOpacity style={{height:30,backgroundColor:'#b5803b',alignItems:'center'}}>
    <View style={{flexDirection:'row'}}>

    <Image source={item.imgdechat} style={{height:20,width:20,alignItems:'center',top:5}}></Image>

    <Text style={{top:5}}>Chat</Text>
    </View>
    
    </TouchableOpacity>

</View>


<View style={{marginLeft:10,flex:.3}}>
    <TouchableOpacity style={{height:30,backgroundColor:'#d84454',alignItems:'center'}}>
    <View style={{flexDirection:'row'}}>

    <Image source={item.imgdecline} style={{height:20,width:20,alignItems:'center',top:5}}></Image>

    <Text style={{top:5}}>Cancel</Text>
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
                <Text
                    fontSize={14}
                    style={{
                        color: "#98A2AB",
                        textAlign: 'center'
                    }}
                >
                    MENU
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


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>




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

<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'lightgrey'}}>
                <View style={{flex:.9,height:50,justifyContent:'center',marginLeft:10}}>
                    <Text style={{fontSize:14,color:'#b5803b'}}>Add New Dish To Menu</Text>
                </View>
                <View style={{flex:.1,height:50,justifyContent:'center',marginRight:10}}>
                <TouchableOpacity>
                  <Image source={require('../../Screens/BottomBarScreens/Assets/AddIcon.png')} style={{height:25,width:25}}></Image>
                  </TouchableOpacity>
                </View>
            </View>


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
<View style={{height:130}}>
    <Text style={{alignSelf:'center',color:'black'}}>Calender</Text>
</View>
<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'lightgrey'}}>
                <View style={{flex:.9,height:50,justifyContent:'center',marginLeft:10}}>
                    <Text style={{fontSize:14,color:'#b5803b'}}>Add New Dish To Menu</Text>
                </View>
                <View style={{flex:.1,height:50,justifyContent:'center',marginRight:10}}>
                <TouchableOpacity>
                  <Image source={require('../../Screens/BottomBarScreens/Assets/AddIcon.png')} style={{height:25,width:25}}></Image>
                  </TouchableOpacity>
                </View>
            </View>



<FlatList
                            data={this.state.arr}
                            renderItem={this.renderItem} />

                    </Tab>
                </Tabs>
            </View>
        );
    }
}
