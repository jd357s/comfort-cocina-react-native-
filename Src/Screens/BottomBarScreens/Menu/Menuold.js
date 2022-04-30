import React, { Component } from 'react';
import {
    Platform, StyleSheet,
    Text, View, SafeAreaView,
    TextInput, Image,
    FlatList, ImageBackground,
    TouchableOpacity, ScrollView,AsyncStorage,Alert
} from 'react-native';
var today = new Date();
import Style from '../Menu/Dish/style'
import { Card, Tab, Tabs, TabHeading } from 'native-base'
import MyDatePicker from '../../../Components/datePicker/index'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { GET_MENU_ITEMS } from '../../Config/Global'
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
    componentDidMount(){
        this.getMenuData();
    }
    getMenuData = ()=>{
        const value =  AsyncStorage.getItem('userlogin');
        // Alert.alert(JSON.stringify(value))
        fetch(GET_MENU_ITEMS+'?userId='+value, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
         
            }) 
            .then((serviceResponse) => { return serviceResponse.json() } ) 
            .catch((error) => console.warn("fetch error:", error))
            .then((serviceResponse) => {
            
                obj = serviceResponse;
                var count = Object.keys(obj).length
                // Alert.alert(count.toString())
                this.setState({ countList:count})
                this.setState({itemsArray:serviceResponse})
          console.log(JSON.stringify(this.state.itemsArray))
            Alert.alert(JSON.stringify(serviceResponse));
            });
    }
    _keyExtractor = (item, index) => item.id;
    renderItem = ({ item, index }) => {
        // return this.state.itemsArray.map((data) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DishDetail', {
                    dishDetail: this.state.arr
                })}>
               
                <Card style={Style.renderItemStyle}>
                    <View style={{ flex: 0.2,height:150}}>
                     <View style={{ flex: .65,alignItems:'center',top:20 ,justifyContent:'center'}}>
                            <Image source={item.imageChef} style={Style.renderitemChefimageStyle}></Image>

                        </View>
                        <View style={{ flex: .45,alignItems:'center'}}>
                            <Text style={{ fontSize: 13, color: 'black',marginLeft:10 }}>{item.txtname}</Text>
                            <Text style={{color:'#b5803b',marginLeft:10,fontSize:17}}>*****</Text>
                            <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12 ,marginLeft:10}}>{item.txtReview}</Text>
                        </View>


                    </View>
                    <View style={{ flex: 0.8, marginRight: 10 }}>
                        <View style={{marginRight: 10 }}>
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
                                <View style={{ flexDirection: 'row',flex:.3}}>
                                    <View>
                                    <Image source={item.imageMarker} style={{ height: 15, width: 15 }}></Image>
                                    </View>
                                    <View style={{marginLeft:5}}>
                                    <Text style={{ color: 'grey', fontSize: 14 }}>{item.txtmiles}</Text>
                                    </View>
                                </View>
                            <View  style={{marginLeft:10}}>
                                <Text style={{ color: 'grey', fontSize: 13}}>{item.txtlanguage}</Text>
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
        return (
            <View style={{ flex: 1 }}>
                <Card>

                    <View style={Style.barbaraChefView}>
                        <View style={Style.chefImageView} >
                            <Image source={item.imageChef} style={Style.ChefImageStyle}></Image>
                        </View>

                        <View style={Style.babaraTextView} >
                            <Text style={{ fontSize: 15,color:'black' }}>{item.txtname}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={item.imageMarker} resizeMode="contain" style={Style.markerImageStyle}></Image>
                                <Text style={{ fontSize: 12}}>{item.txtmiles}</Text>
                            </View>
 
                        </View>


                        <View style={{ flex: 0.5, justifyContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ textDecorationLine: 'underline', color: '#0379ff', fontSize: 12, textAlign: 'center' }}>{item.txtReview1}</Text>

                        </View>

                        <View style={{ flex: 0.4, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#841314', width: 70, height: 20, justifyContent: 'center' }}>
                                <Text style={Style.reviewtxtSTyle}>{item.txtReview}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </Card>
                <View>
                    <Text style={{ marginLeft: 10 ,color:'black'}}>Barbaras's Featured Dishes</Text>
                </View>
                <ScrollView horizontal={true}>
                    <Card>
                        <View style={Style.cardMainView}>
                            <View style={Style.MainViewInnerView}>
                                <View style={{flex:.1}}>
                                    <Image source={item.imageDish1} style={Style.backGroundImageStyle}>


                                    </Image>

                                    <View style={{flex:1,position:'absolute',top:100, backgroundColor: 'rgba(242,243,244,0.8)', marginLeft:5 }}>
                                            
                                            <Text style={{width:185, color: 'black', fontSize: 12, marginLeft: 5 ,height:20}}>Today: 1pm- 5pm</Text>
                                    

                                    </View>
                                </View>

                                <View style={Style.txtmainview}>

                                    <View>
                                        <Text style={Style.txtstyle}>{item.txtMeal1}</Text>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar1}</Text>
                                        <Text style={{color:'grey',fontsize:12}} >{item.txtSingle1}</Text>
                                     
                                        </View>
                                     
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar2}</Text>
                                        <Text style={{color:'grey',fontsize:12}} >{item.txtfamily}</Text>
                                     
                                        </View>
                                        </View>
                                    </View>
                                    </View>

                            </View>

                            <View style={Style.MainViewInnerView}>
                                <View>
                                    <Image source={item.imageDish1} style={Style.backGroundImageStyle}>
                                       
                                    </Image>
                                    <View style={{flex:1,position:'absolute',top:95, backgroundColor: 'rgba(242,243,244,0.8)', margin:5 }}>
                                            
                                                <Text style={{width:185, color: 'black', fontSize: 12, marginLeft: 5,height:20 }}>Today: 1pm- 5pm</Text>
                                            

                                        </View>
                                </View>

                                <View style={Style.txtmainview}>

                                <View>
                                        <Text style={Style.txtstyle}>{item.txtMeal1}</Text>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar1}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >{item.txtSingle1}</Text>
                                     
                                        </View>
                                     
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar2}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >{item.txtfamily}</Text>
                                     
                                        </View>
                                        </View>
                                    </View>

                                </View>

                            </View>
                            <View style={Style.MainViewInnerView}>
                                <View >
                                    <Image source={item.imageDish1} style={Style.backGroundImageStyle}>
                                        
                                    </Image>
                                    <View style={{flex:1,position:'absolute', top: 95, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{width:185, color: 'black', fontSize: 12, marginLeft: 5,height:20 }}>Today: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                                </View>

                                <View style={Style.txtmainview}>

                                <View>
                                        <Text style={Style.txtstyle}>{item.txtMeal1}</Text>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar1}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >{item.txtSingle1}</Text>
                                     
                                        </View>
                                     
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Style.txtstyle} >{item.txtDollar2}</Text>
                                        <Text style={{color:'grey',fonctsize:12}} >{item.txtfamily}</Text>
                                     
                                        </View>
                                        </View>
                                    </View>


                                </View>

                            </View>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
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
                            data={this.state.arr}
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
                            data={this.state.arr1}
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