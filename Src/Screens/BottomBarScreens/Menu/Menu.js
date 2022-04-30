import React, { Component } from 'react';
import {
    Platform, StyleSheet,
    Text, View, SafeAreaView,
    TextInput, Image,
    FlatList, ImageBackground,
    TouchableOpacity, ScrollView,AsyncStorage,Alert
} from 'react-native';
//var today = new Date();
import Style from '../Menu/Dish/style'
import { Card, Tab, Tabs, TabHeading } from 'native-base'
import MyDatePicker from '../../../Components/datePicker/index'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { GET_MENU_ITEMS, GETPRODUCTBYCHEF, SAVEFAVORITE} from '../../Config/Global'
import {Loader} from '../../../Components/Loader'
var abc;
export default class Menu extends Component {
    
  
    constructor(props) {
        super()
        this.state = {
            visible: true,
            index: 0,
            datePicker:false,
            cusindatePicker:false,
            countList:'',
            itemsArray:null,
            chefData:{},

            arr: [{
                imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
                txtReview: '4 Reviews',
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
            ],
            arr1: [{
                imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
                txtReview: 'Follow', txtReview1: '5 Review',
                imageDish1: require('../../../Assets/DishImages/noodle.jpeg'),
                txtMeal1: 'Civeche',
                imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
                txtmiles: '3.1 miles',
                txtSingle1: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
                txtfamily:'/family',txtDollar2:'$45.99'
            },
            {
                imageChef: require('../../../Assets/DishImages/womanimage.jpeg'), txtname: 'Barbara',
                txtReview: 'Follow', txtReview1: '5 Review',
                imageDish1: require('../../../Assets/DishImages/burger.jpg'),
                txtMeal1: 'Fritata Peppercorn',
                imageMarker: require('../../../Assets/DishImages/icons8-marker-26.png'),
                txtmiles: '3.1 miles',
                txtSingle1: '/single', txtlanguage: 'Spanish',txtDollar1:'$10.99',
                txtfamily:'/family',txtDollar2:'$45.99'

            }
            ],
            arrary_Cusine: [{ image: require('../../../Assets/DishImages/burger.jpg'), txtmealCountry: 'Spanish' },
            { image: require('../../../Assets/DishImages/gettyimage.jpg'), txtmealCountry: 'American' },
            { image: require('../../../Assets/DishImages/gettyimage.jpg'), txtmealCountry: 'Mexican' },
            { image: require('../../../Assets/DishImages/burger.jpg'), txtmealCountry: 'Italian' }
            ],
            Array_AllCusine: [
            { txtCusine: 'American' },
            { txtCusine: 'Asian' },
            { txtCusine: 'Cajun' },
            { txtCusine: 'Calzone' },
            { txtCusine: 'Cantonese' },
            ]
        }
    }

    Infomethod()
    {
        alert('Info')
    }
    componentWillMount(){
        this.refresh = this.props.navigation.addListener('willFocus', () => {
            this.getMenuData();
          });
          this.getDataBychef();
       
    }
    componentWillUnmount() {
        this.refresh;
      }
    async getMenuData(){
        const value =  await AsyncStorage.getItem('userlogin');
        fetch(GET_MENU_ITEMS+'?userId='+value, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
         
            }) 
            .then((response) => { return response.json() } ) 
            .catch((error) => console.warn("fetch error:", error))
            .then((serviceResponse) => {
               // alert(JSON.stringify(serviceResponse.favourites));
                this.setState({itemsArray : serviceResponse.favourites});
            });
    }

    ratingMethod = (rate) =>{
        rate = parseInt(rate);
        let total= 5;
        var Ratingstar = [];
        for( i = 1; i <= rate; i++){
                Ratingstar.push(<Image source={require('../../../Assets/DishImages/star.png')} style={Style.rating}></Image>)
        }
        for( i = rate; i < total; i++){
                Ratingstar.push(<Image source={require('../../../Assets/DishImages/empty-star.png')} style={Style.rating}></Image>)
           }
        return (
        <View style={Style.ratingWrap}>
        {Ratingstar}
        </View>)
    }

    getDataBychef = ()=>{
        fetch(GETPRODUCTBYCHEF, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
         
            }) 
            .then((response) => { return response.json() } ) 
            .catch((error) => console.warn("fetch error:", error))
            .then((serviceResponse) => {
                if(serviceResponse.success == 1){
                  this.setState({chefData : serviceResponse.chefdata});
                }
            });
    }
   async saveFavorite(id, is_liked){
        let like_value= '';
        if(is_liked == 1){
            like_value = 0;
        }
        else{
            like_value= 1;
        }
    
        const userid =  await AsyncStorage.getItem('userlogin');      
        var details = {
            'post_id':id,
            'user_id':userid,
            'like': like_value
           };
           var formBody = [];
           for (var property in details) {
           var encodedKey = encodeURIComponent(property);
           var encodedValue = encodeURIComponent(details[property]);
           formBody.push(encodedKey + "=" + encodedValue);
           }
           formBody = formBody.join("&")
        
        fetch(SAVEFAVORITE,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody
            })
        .then((response) => response.json())
        .then((responseJson) => {
                if (responseJson.success == 1) {
                    this.getMenuData(); 
                }
            })
            .catch((error) => {
                console.error(error);
        });
    }
    _keyExtractor = (item, index) => item.id;
    renderItem = ({ item, index }) => {
        // return this.state.itemsArray.map((data) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DishDetail', {
                    dishDetail: this.state.arr,
                    item:item
                    })}>
               
                <Card style={Style.renderItemStyleNew}>
                    <View style={{ flex: 0.25, height:176}}>
                     
                        <View style={{ alignItems:'center', marginLeft:10, paddingTop:50}}>
                             <Image source={item.chef_image != '' ? {uri:item.chef_image} : require('../../../Assets/DishImages/user.png')} style={Style.renderitemChefimageStyle}></Image>
                            <Text style={{ fontSize: 13, color: 'black'}}>{item.chef_name}</Text>
                            {this.ratingMethod(item.dish_rating)}
                            <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12}}>{item.chef_review}</Text>
                        </View>


                    </View>
                    <View style={{ flex: 0.75, marginRight: 10, paddingTop:10 }}>
                        <View style={{marginRight: 10 }}>
                            <ImageBackground source={{ uri:item.dish_image }}  style={Style.imageDishtyle}>

                                <View style={{ alignItems: 'flex-end', marginRight: 10, }}>
                                    <TouchableOpacity onPress={() => this.saveFavorite(item.id, item.like_status)}  style={{ width: 20 }}>
                                         {item.like_status == "1" ?
                                            <Image source={require('../../../Assets/DishImages/heartGreen.png')} style={{ height: 20, width: 20 }}></Image>
                                            : <Image source={require('../../../Assets/DishImages/heartRed.png')} style={{ height: 20, width: 20 }}></Image>

                                        }</TouchableOpacity>
                                </View>

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
                                      <Text style={Style.txtstyle}>{item.dish_name}</Text>
                                       <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginTop:5}}>
                                        <Text style={Style.txtstyle} >${item.price.dish_single_price}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >/Single </Text>
                                     
                                        </View>
                                     
                                        <View style={{flexDirection:'row',marginTop:5}}>
                                        <Text style={Style.txtstyle} >${item.price.dish_family_price}</Text>
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
                            // })
                            
    }

    renderItemChef = ({ item }) => {
        
        return(
            <View style={{ flex: 1 }}>
            <Card>

              <View style={Style.barbaraChefView}>
                    
                  <View style={Style.chefImageView} >
                            <Image source={{uri: item.chef_image}} style={Style.ChefImageStyle}></Image>
                     </View>
                   <View style={Style.babaraTextView} >
                           <Text style={{ fontSize: 15,color:'black',paddingLeft:2,paddingBottom:5}}>{item.chef_name}</Text>
                          <View style={{ flexDirection: 'row' }}>
                              <Image source={require('../../../Assets/DishImages/location.png')} resizeMode="contain" style={Style.markerImageStyle}></Image>
                                 <Text style={{ fontSize: 12, color:'#A8A8A8'}}>3.1 miles</Text>
                 </View>
 
                     </View>


                     <View style={{ flex: 0.35, justifyContent: 'center', justifyContent: 'center' }}>
                      {this.ratingMethod(item.chef_rating)}
                          <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12, textAlign: 'center' }}>Follow</Text>

                        </View>

                    <View style={{ flex: 0.55, justifyContent: 'center', marginLeft:20 }}>
                          <TouchableOpacity style={{ backgroundColor: '#851414', color:'#ffffff',  width: 100, height: 30, justifyContent: 'center' }}>
                               <Text style={Style.reviewtxtSTyle}>{item.chef_review}</Text>
                            </TouchableOpacity>

                      </View>

                    </View>
        </Card>
        <View style={Style.cardMainViewnew}>
              <View>
                  <Text style={{ padding:10, marginLeft:10, color:'black'}}>{item.chef_name}'s Featured Dishes</Text>
          </View>
          <ScrollView horizontal={true}>
        {item.products.length > 0 ?
               item.products.map(product => { 
                   return(<Card style={{margin:10}} transparent>
                          <View style={Style.cardMainVieww}>
                              <View style={Style.MainViewInnerView}>
                                  <View style={{flex:.1}}>
                                      <Image source={{uri : product.dish_image}} style={Style.backGroundImageStyle}>
  
  
                                      </Image>
  
                                      <View style={{flex:1,position:'absolute',top:100, backgroundColor: 'rgba(216,216,216,0.8)', marginLeft:5 }}>
                                              
                                              <Text style={{width:185, color: 'black', fontSize: 12, marginLeft: 5 ,height:20}}>Today: 1pm- 5pm</Text>
                                      
  
                                      </View>
                                  </View>
  
                                  <View style={Style.txtmainview}>
  
                                      <View>
                                          <Text style={Style.txtstyle}>{product.dish_name}</Text>
                                          <View style={{flexDirection:'row'}}>
                                          <View style={{flexDirection:'row',marginLeft:5}}>
                                          <Text style={Style.txtstyle} >${product.price.dish_single_price}</Text>
                                          <Text style={{color:'grey',fontsize:12}} >/Single</Text>
                                       
                                          </View>
                                       
                                          <View style={{flexDirection:'row',marginLeft:5}}>
                                          <Text style={Style.txtstyle} >${product.price.dish_family_price}</Text>
                                          <Text style={{color:'grey',fontsize:12}} >/Family</Text>
                                       
                                          </View>
                                          </View>
                                      </View>
                                      </View>
                              </View>
                          </View>
                      </Card>                
                 )  }) : null}
                   </ScrollView>
                  </View>
        </View>
        )
       
    }

    renderItemCusine = ({ item }) => {
        return (
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <View>
                            <Image source={item.image} resizeMode='contain' style={{ height: 120, width: 140, borderTopLeftRadius: 5, borderTopRightRadius: 5,marginLeft:10}}></Image>
                        </View>
                        <View style={{ backgroundColor: 'white',marginLeft:10  }}>
                            <Text style={{ margin: 5}}>{item.txtmealCountry}</Text>

                        </View>
                    </TouchableOpacity>

                
                </View>
            
        );
    }

    renderItemAllCusine=({item})=>{
return(<View style={{flex:1,borderBottomColor:'grey',borderBottomWidth:1,}}>
    <View style={{justifyContent:'center'}}>
    
    <Text style={{marginLeft:20}}>{item.textAllCusine}</Text>

   
    </View>
    <View style={{height:30,alignContent:'center'}}> 

<Text style={{marginLeft:20,justifyContent:'center'}}>{item.txtCusine}</Text>
</View>
</View>)

    }



    HeartImageMethod(index) {
        // alert('welcome')
        this.setState({
            visible: !this.state.visible
        })
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
                    CUISINE
                </Text>
            </TabHeading>
        );
    }

    FilterMethod() {
        // alert('fjhjkk')
        this.props.navigation.navigate('Filterscreen')
    }
    datePicker(){
        this.setState({
            datePicker:!this.state.datePicker
        })
        }

        cusindatePicker(){
            this.setState({
                cusindatePicker:!this.state.cusindatePicker
            })
            }
    render() {
         return (
            <View style={Style.mainview}>
             
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
                        <View style={Style.filterview}>
                            <View style={{flex:.8,height:60,justifyContent:'center',marginLeft:30}}>
                            <TouchableOpacity onPress={()=>this.datePicker()}>
                                <Text style={{marginLeft:10}}>Date Picker</Text></TouchableOpacity>
                                {this.state.datePicker!=false &&
                                <MyDatePicker width={200} date={this.state.date} placeHolder='select date' maxDate='2019-06-01' 
                                 onDateChange={(date)=>this.setState({date:date})}
                                 confirmBtnText='Confirm'
                                 cancelBtnText='Cancel'/> 
                                }
                            </View>

                                <TouchableOpacity onPress={() => this.FilterMethod()} style={{height:60, flexDirection: 'row',alignItems:'center'}}>
                                  <Image resizeMode="contain" source={require('../../../Assets/DishImages/filter.png')} style={{ height: 16, width: 15 }}></Image>
                                      <Text style={{ color: '#0379ff', fontSize: 13,marginLeft:5 }}>Filter</Text>
                                </TouchableOpacity>
                            </View>



                       <FlatList
                            data={this.state.itemsArray}
                            renderItem={this.renderItem}
                            keyExtractor={this._keyExtractor}
                           />  
                            </Tab>

                       <Tab
                        heading={this.headingTwo()}
                        tabStyle={{
                            backgroundColor: '#fff'
                        }}
                        >

                        <View style={Style.filterview}>
                            <View style={{flex:.8,height:40,justifyContent:'center'}}>
                                <Text style={{marginLeft:10}}>Date Picker</Text>

                            </View>

                                <View style={{flex:.2,height:40, flexDirection: 'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={() => this.FilterMethod()} >

                                    <Image resizeMode="contain" source={require('../../../Assets/DishImages/filter.png')} style={{ height: 16, width: 15 }}></Image>
                                    </TouchableOpacity>

                                    <Text style={{ color: '#0379ff', fontSize: 13 }}>Filter</Text>

                                </View>
                          


                        </View>



                        <FlatList
                            data={this.state.chefData}
                            renderItem={this.renderItemChef} 
                            />
                        </Tab>

                        <Tab
                        heading={this.headingThree()}
                        tabStyle={{
                            backgroundColor: '#fff'
                        }}
                        >
                      <View style={Style.filterview}>
                            <View style={{flex:.8,height:40,justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>this.cusindatePicker()}>
                                <Text style={{marginLeft:10}}>Date Picker</Text>
                                {this.state.cusindatePicker!=false &&
                                <MyDatePicker width={200} date={this.state.date} placeHolder='select date' maxDate='2019-06-01' 
                                 onDateChange={(date)=>this.setState({date:date})}
                                 confirmBtnText='Confirm'
                                 cancelBtnText='Cancel'/> 
                                }
                                </TouchableOpacity>
                            </View>

                                <View style={{flex:.2,height:40, flexDirection: 'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={() => this.FilterMethod()} >

                                    <Image resizeMode="contain" source={require('../../../Assets/DishImages/filter.png')} style={{ height: 16, width: 15 }}></Image>
                                   

                                    <Text style={{ color: '#0379ff', fontSize: 13 }}>Filter</Text>
                                    </TouchableOpacity>
                                </View>
                          


                        </View>
                            
                            <View style={{flex:.7,backgroundColor:'#E5E7E9'}}>
                            
                        <FlatList 
                        
                            data={this.state.arrary_Cusine}
                            renderItem={this.renderItemCusine}
                            numColumns={2}
                        />
                        </View>
                      <View style={{flex:.3}}>
                      <Text style={{fontSize:16,fontWeight:'600',padding:10}}>All Cusine</Text>
                        <FlatList
                            data={this.state.Array_AllCusine}
                            renderItem={this.renderItemAllCusine}
                            
                        />
                        </View>
                        
                    </Tab>
                </Tabs>

                              

            </View>

        );
    }
}