import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,FlatList,ImageBackground,TouchableOpacity,Image,ActivityIndicator, AsyncStorage} from 'react-native';

import { Card, Tab, Tabs, TabHeading } from 'native-base'
import { USERFAVORITELIST,} from '../../Config/Global'
import Style from './FavoritesStyle'
import Style1 from '../Menu/Dish/style'
export default class Favorites extends Component {

constructor(props)
{
  super(props)
  this.state={
    index: 0,
    itemsArray:null,
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

    componentDidMount(){
        this.getMenuData();
    }
    async getMenuData(){
        const value =  await AsyncStorage.getItem('userlogin');
        fetch(USERFAVORITELIST+'?userId='+value, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        
            }) 
            .then((response) => { return response.json() } ) 
            .catch((error) => console.warn("fetch error:", error))
            .then((serviceResponse) => {
                this.setState({itemsArray : serviceResponse.data});
            });
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
        onPress={() => this.props.navigation.navigate('DishDetail', {
            dishDetail: this.state.arr,
            item:item
            })}>
       
        <Card style={Style1.renderItemStyleNew}>
            <View style={{ flex: 0.25, height:176}}>
             
                <View style={{ alignItems:'center', marginLeft:10, paddingTop:50}}>
                     <Image source={item.chef_image != '' ? {uri:item.chef_image} : require('../../../Assets/DishImages/user.png')} style={Style1.renderitemChefimageStyle}></Image>
                    <Text style={{ fontSize: 13, color: 'black'}}>{item.chef_name}</Text>
                    {this.ratingMethod(item.dish_rating)}
                    <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12}}>{item.chef_review}</Text>
                </View>


            </View>
            <View style={{ flex: 0.75, marginRight: 10, paddingTop:10 }}>
                <View style={{marginRight: 10 }}>
                    <ImageBackground source={{ uri:item.dish_image }}  style={Style1.imageDishtyle}>

                        {/* <View style={{ alignItems: 'flex-end', marginRight: 10, }}>
                            <TouchableOpacity onPress={() => this.saveFavorite(item.id, item.like_status)}  style={{ width: 20 }}>
                                 {item.like_status == "1" ?
                                    <Image source={require('../../../Assets/DishImages/heartGreen.png')} style={{ height: 20, width: 20 }}></Image>
                                    : <Image source={require('../../../Assets/DishImages/heartRed.png')} style={{ height: 20, width: 20 }}></Image>

                                }</TouchableOpacity>
                        </View> */}

                        <View style={{ flexDirection: 'row',    paddingLeft:5, top:52, borderRadius:5, backgroundColor: 'rgba(216,216,216,0.8)', margin: 5 }}>
                            <View style={{ flex: 0.4 }}>
                                <Text style={{ color: 'black', fontSize: 12, textAlign:'left' }}>Available: {item.available}</Text>
                            </View>
                            <View style={{ flex: 0.6,justifyContent:'center' }}>
                                <Text style={{ color: 'black', fontSize: 12,textAlign:'right',paddingRight: 5 }}>Accepts Orders Until: {item.accepts_order_until}</Text>
                            </View>
                        </View>
                    </ImageBackground>

                </View>

                <View style={{ flex: .2, flexDirection: 'row', marginTop: 10, marginRight: 10}}>
                 <View style={{ flex: 0.7 }}>
                        <View>
                              <Text style={Style1.txtstyle}>{item.dish_name}</Text>
                               <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={Style1.txtstyle} >${item.price.dish_single_price}</Text>
                                <Text style={{color:'grey',fonctsize:12}} >/Single </Text>
                             
                                </View>
                             
                                <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={Style1.txtstyle} >${item.price.dish_family_price}</Text>
                                <Text style={{color:'grey',fonctsize:12}} >/Family</Text>
                             
                                </View>
                                </View>
                            </View>
                    </View>

                    <View style={{ flex: .3 }}>
                        <View style={{ flexDirection: 'row',flex:.3}}>
                            <View>
                            <Image source={require('../../../Assets/DishImages/location.png')} style={{ height: 15, width: 15 }}></Image> 
                            </View>
                            <View style={{marginLeft:5}}>
                            <Text style={{ color: 'grey', fontSize: 14, textAlign:'right' }}>{item.miles}</Text>
                            </View>
                        </View>
                    <View  style={{marginTop:5}}>
                        <Text style={{ color: 'grey', fontSize: 13, textAlign:'right'}}>{item.language}</Text>
                        </View>
                    </View>
                </View>

            </View>
          
        </Card>
    </TouchableOpacity>
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
ratingMethod = (rate) =>{
    rate = parseInt(rate);
    let total= 5;
    var Ratingstar = [];
    for( i = 1; i <= rate; i++){
            Ratingstar.push(<Image source={require('../../../Assets/DishImages/star.png')} style={Style1.rating}></Image>)
    }
    for( i = rate; i < total; i++){
            Ratingstar.push(<Image source={require('../../../Assets/DishImages/empty-star.png')} style={Style1.rating}></Image>)
       }
    return (
    <View style={Style1.ratingWrap}>
    {Ratingstar}
    </View>)
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
                            data={this.state.itemsArray}
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