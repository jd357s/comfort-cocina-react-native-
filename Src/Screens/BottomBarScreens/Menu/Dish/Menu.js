import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,TextInput,Image,FlatList} from 'react-native';


export default class Menu extends Component {
    static navigationOptions=({
        header:<View style={{height:20,backgroundColor:'#841314',flexDirection:'row'}}>
        <Image style={{height:18,width:18,marginLeft:30}} resizeMode='contain' source={require('../Assets/locations.png')}></Image>
        <TextInput style={{width:200,marginLeft:20,borderBottomColor:'#fff',borderBottomWidth:1,marginBottom:5,}}  placeholder='Enter address' placeholderTextColor='#fff'></TextInput>
        <Image style={{height:18,width:18,marginLeft:40}} resizeMode='contain' source={require('../../../../Src/Assets/Loginimage/detail.png')}></Image>
        </View>,
     headerLeft:null,
        headerStyle: {
            backgroundColor: '#841314',
            
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize:22
          },
         
    })
    constructor(props) {
      super()
      this.state = {
          arr: [{
              imageChef: require('../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
              txtReview: '5 Reviews',
              imageDish: require('../../Assets/DishImages/burger.jpg'),
              txtMeal: 'Fritata Peppercorn',
              imageMarker: require('../../Assets/DishImages/icons8-marker-26.png'),
              txtmiles: '3.1 miles',
              txtSingle: '$10.99/Single  $45.99/Family', txtlanguage: 'Spanish'
          },
         { imageChef: require('../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
          txtReview: '5 Reviews',
          imageDish: require('../../Assets/DishImages/chicken.jpg'),
          txtMeal: 'Civeche',
          imageMarker: require('../../Assets/DishImages/icons8-marker-26.png'),
          txtmiles: '3.1 miles',
          txtSingle: '$10.99/Single  $45.99/Family', txtlanguage: 'Spanish'},

          { imageChef: require('../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
          txtReview: '5 Reviews',
          imageDish: require('../../Assets/DishImages/gettyimage.jpg'),
          txtMeal: 'Civeche',
          imageMarker: require('../../Assets/DishImages/icons8-marker-26.png'),
          txtmiles: '3.1 miles',
          txtSingle: '$10.99/Single  $45.99/Family', txtlanguage: 'Spanish'},


          { imageChef: require('../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
          txtReview: '5 Reviews',
          imageDish: require('../../Assets/DishImages/macroni.jpeg'),
          txtMeal: 'Civeche',
          imageMarker: require('../../Assets/DishImages/icons8-marker-26.png'),
          txtmiles: '3.1 miles',
          txtSingle: '$10.99/Single  $45.99/Family', txtlanguage: 'Spanish'},


          { imageChef: require('../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
          txtReview: '5 Reviews',
          imageDish: require('../../Assets/DishImages/noodle.jpeg'),
          txtMeal: 'Civeche',
          imageMarker: require('../../Assets/DishImages/icons8-marker-26.png'),
          txtmiles: '3.1 miles',
          txtSingle: '$10.99/Single  $45.99/Family', txtlanguage: 'Spanish'}
      ],
      }
  }
  renderItem = ({ item }) => {
    return (
        <View style={Style.renderItemStyle}>
            <View style={{ flex: 0.2,justifyContent:'center'}}>
                <Image source={item.imageChef} style={Style.renderitemChefimageStyle}></Image>
                <Text>{item.txtname}</Text>
                <Text style={{ textDecorationLine: 'underline', color: 'blue' ,fontSize:12}}>{item.txtReview}</Text>

            </View>
            <View style={{ flex: 0.8,marginRight:10}}>
            <View style={{marginRight:10}}>
            <Image source={item.imageDish} style={Style.imageDishtyle}></Image>

            </View>

                <View style={{flex:1, flexDirection: 'row',marginTop:10 }}>

                    <View style={{flex:0.7}}>
                        <Text style={{color:'grey',fontSize:14}}>{item.txtMeal}</Text>
                        <Text style={{color:'grey',fontSize:12}} >{item.txtSingle}</Text>
                    </View>

                    <View style={{flex:.3 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={item.imageMarker} style={{height:15,width:15}}></Image>
                            <Text style={{color:'grey',fontSize:10}}>{item.txtmiles}</Text>
                        </View>

                        <Text style={{color:'grey',fontSize:10,textAlign:'center'}}>{item.txtlanguage}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

  render() {
    return (
      <View style={Style.mainview}>
                <FlatList
                    data={this.state.arr}
                    renderItem={this.renderItem}


                />
            </View>
    );
  }
}