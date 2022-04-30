import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,
     SafeAreaView, Image, FlatList,
      ImageBackground, TouchableOpacity,Dimensions } from 'react-native';
const deviceheight=Dimensions.get('window').height;
const devivewidth=Dimensions.get('window').width      
import Style from '../Dish/style'
import { Card } from 'native-base'
import Carousel from 'react-native-snap-carousel'
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../../Components/touch/index';
import Styles from './DishStyle'
import Loader from '../../../../Components/Loader'
import {GETPRODUCT} from '../../../Config/Global'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#131420',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default class DishDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: 1,
            productData: {}
        }
    }
    componentDidMount(){
        this.getDetails();       
    }
    getDetails(){
        const { navigation } = this.props;
        let item = navigation.getParam('item');
        let url = GETPRODUCT+'?post_id='+item.id;     
          
        fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
            }) 
            .then((response) => { return response.json() } ) 
            .catch((error) => console.warn("fetch error:", error))
            .then((serviceResponse) => {
               this.setState({isLoading: 0})
                if(serviceResponse.success == 1){
                    this.setState({productData : serviceResponse.data});
                }
            });
        
    }
   
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.item.dish_name,
            headerStyle: {
                backgroundColor: '#841314',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 20,
                marginLeft:50
            },
        }
     };

   renderslider({item,index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>                 
               <Image source={{uri:item}} style={{ flex:1,height: 200,width:devivewidth-8,}}  ></Image> 
            </View>
        )
    }
    renderItem = (data) => {
        const { navigation } = this.props;
         const [items] = navigation.getParam('dishDetail');
        let item = navigation.getParam('item');
        return (
            <ScrollView style={{ flex: 1 }}>

               <Card>
                    <View style={{flex:.1}}>
                        <Carousel
                        style={{ flex:1}} 
                        data={data.dish_gallery}
                        sliderWidth={devivewidth}
                        itemWidth={devivewidth}
                        renderItem={this.renderslider}
                        autoplay={true}
                        autoplayInterval= {3000}
                        loop={true}
                        /> 
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{flex:.8, backgroundColor: '#b5803b', height: 40, marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ fontSize: 12, marginLeft: 10, color: '#fff', marginTop: 5 }}>
                        Availibale: {data.available}   Accepted Orders Untill:{data.accepts_order_until}</Text>
                        </View>
                       

<View style={{ flex: .2}}>
                                <View style={{ flexDirection: 'row'}}>
                                    <View>
                                    <Image source={items.imageMarker} style={{ height: 15, width: 15 }}></Image>
                                    </View>
                                    <View style={{marginLeft:5}}>
                                    <Text style={{ color: 'grey', fontSize: 14 }}>{data.miles}</Text>
                                    </View>
                                </View>
<View  style={{marginLeft:10}}>
                                <Text style={{ color: 'grey', fontSize: 13}}>{data.language}</Text>
                                </View>
                            </View>


                    </View>

                </Card>
                <Card style={{ height: 40 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20}}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey' }}>$/{data.price.dish_single_price}</Text><Text style={{ fontSize: 14, color: 'grey', margin: 2 }}>single</Text>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey', marginLeft: 60 }}>$/{data.price.dish_family_price}</Text><Text style={{ fontSize: 14, color: 'grey', margin: 2 }}>family</Text>
                    </View>
                </Card>
                <Card>
                    <Text style={{ fontSize: 18, color: 'black', padding: 10 }}>{data.dish_name}</Text>
                    <Text style={{ fontSize: 15, color: 'black', padding: 10 }}>{data.post_content}
                   </Text>
                </Card>
                <Card>
                    <View  style={{marginTop:10}}>
                        <Text style={{marginLeft:15,color:'black'}}>Ingredients</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20 }}>
                    {data.ingredients.length > 0 ?
                     data.ingredients.map(item =>{
                        return(<Text style={{padding:5, color:'#b5803b', borderColor:'#b5803b', borderWidth:1, marginRight:10}}>
                        {item.name}</Text>)
                    }):  null}
                      
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{marginLeft:15,color:'black'}}>Allergies</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom:10, marginTop: 5, marginLeft: 20 }}>
                    {data.allergies.length > 0 ?
                    data.allergies.map(item =>{
                        return( <Text style={{padding:5, color:'#b5803b', borderColor:'#b5803b', borderWidth:1, marginRight:10}}>
                        {item.name}</Text>)
                    }) : null}
                   </View>
                </Card>
                <Card>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChefProfile', {
                        imageChef: [items],


                    })}>
                        <View style={Styles.barbaraChefView}>
                            <View style={Styles.chefImageView} >
                                <Image source={{uri: item.chef_image }} style={Styles.ChefImageStyle}></Image>
                            </View>


<View style={Styles.babaraTextView} >
                            <Text style={{ fontSize: 15,color:'black' }}>{item.chef_name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={items.imageMarker} resizeMode="contain" style={Styles.markerImageStyle}></Image>
                                <Text style={{ fontSize: 12}}>{items.miles}</Text>
                            </View>
 
                        </View>

                            <View style={{ flex: 0.4, justifyContent: 'center' }}>

                                <Text style={Styles.reviewtxtSTyle}>{item.dish_review} Reviews</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
                <View>
                    <Text style={{ marginLeft: 10 }}>{data.chef_name}'s Featured Dishes</Text>
                </View>

                <ScrollView horizontal={true}>
                    <Card>
                        <View style={Styles.cardMainView}>
                        {data.featured_product.length > 0 ?
                        data.featured_product.map(item =>{
                              return(<View style={Styles.MainViewInnerView}>
                              <View>
                                  <ImageBackground source={{uri:item.dish_image }} style={Styles.backGroundImageStyle}>


                                      <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                          <View>
                                              <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Today: {item.available}</Text>
                                          </View>

                                      </View>
                                  </ImageBackground>

                              </View>

                              <View style={Styles.txtmainview}>

                                 
                                      <Text style={Styles.txtstyle}>{item.dish_name}</Text>
                                      <View style={{flexDirection:'row'}}>
                                      <View style={{flexDirection:'row',marginLeft:5}}>
                                      <Text style={Styles.txtstyle} >$</Text>

                                      <Text style={Styles.txtstyle2} >{item.price.dish_single_price}</Text>
                                      </View>
                                      <View style={{flexDirection:'row',marginLeft:5}}>
                                      <Text style={Styles.txtstyle} >$</Text>
                                      <Text style={Style.txtstyle2} >{item.price.dish_family_price}</Text>
                                   
                                      </View>
                                      </View>
                                  


                              </View>

                          </View>
                              )

                        }): <Text/>}
                            
                        </View>
                    </Card> 
                </ScrollView> 
            </ScrollView>
        )
    }
    render() {
        const { isLoading, productData } = this.state;
        return (
            <View style={Style.mainview}>
               {productData.id != undefined ? this.renderItem(productData): <Text/> }
                <View style={{ height: 50,justifyContent:'center' }}>
                    <Text style={{textAlign:'center',color:'#b5803b'}}>Order Date:Today</Text>
                </View>
                <View style={{ height: 50 }}>
                    <TouchableOpacity style={{backgroundColor:'#b5803b',height:50,justifyContent:'center'}}><Text style={{color:'white',textAlign:'center'}}>Add to Cart</Text></TouchableOpacity>
                </View>
                {isLoading ? <Loader/>: null}
            </View>
        );
    } 
}
