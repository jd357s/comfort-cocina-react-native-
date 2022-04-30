import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, ScrollView,TouchableOpacity} from 'react-native';
import Styles from './ChefProfileStyle'
import { Card } from 'native-base'
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ChefProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    static navigationOptions = ({
        title:'Chef Profile: Barbara',
       
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 20
        },
    })

    renderItem = () => {
        const { navigation } = this.props;
        const [items] = navigation.getParam('imageChef');
        return (<View style={{ flex: 1 }}>
           
   <ScrollView style={{ flex: 1 }}>
   <Card>
       <Image source={require('../../../BottomBarScreens/Assets/womanimage.png')}  style={Styles.chefimage}></Image>
                <View style={Styles.barbaraChefView}>
                        <View style={Styles.chefImageView} >
                            <Image source={items.imageChef} style={Styles.ChefImageStyle}></Image>
                        </View>

                        <View style={Styles.babaraTextView} >
                            <Text style={{ fontSize: 15,color:'black'}}>{items.txtname}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={items.imageMarker} resizeMode="contain" style={Styles.markerImageStyle}></Image>
                                <Text style={{ fontSize:12}}>{items.txtmiles}</Text>
                            </View>

                        </View>
                        <View style={{ flex: 0.4, justifyContent: 'center' }}>

                            <Text style={Styles.reviewtxtSTyle}>{items.txtReview}</Text>

                        </View>
                    </View>
                   
                </Card>

            <Card>
                <Text style={{ fontSize: 18, color: 'black', padding: 10 }}>Los Angeles, California</Text>
                <Text style={{ fontSize: 15, color: 'black', padding: 10 }}>Lorem ipsum dolor sit amet, consecteture adispicing alit. Sed returm, risus nec condimentum convallis, odio ipsum imperdiet dui, non convallis metus lorem non odio. Aenean sodales diam
                    et emperiet ultricis. Pellentesque vitae utrum fjtdv dhhis enim Nullum vsetinle odio. In ac dolor nulla, Nullam tincsdunt consecteture adispicing alit. Sed returm, risus nec condimentum convallis, odio ipsum imperdiet dui, non convallis metus lorem non odio. .
                   </Text>
            </Card>
            <Card>
                <Text style={{ fontSize: 18, color: 'black', padding: 10 }}>My Fovorite Food Memory</Text>
                <Text style={{ fontSize: 15, color: 'black', padding: 10 }}>Lorem ipsum dolor sit amet, consecteture adispicing alit. Sed returm, risus nec condimentum convallis, odio ipsum imperdiet dui, non convallis metus lorem non odio. Aenean sodales diam
                    et emperiet ultricis. Pellentesque vitae utrum fjtdv dhhis enim Nullum vsetinle odio. In ac dolor nulla, Nullam tincsdunt consecteture adispicing alit. Sed returm, risus nec condimentum convallis, odio ipsum imperdiet dui, non convallis metus lorem non odio. .
                   </Text>
            </Card>
            <Card style={{height:50}}>
                <View style={{flexDirection:'row',height:25,top:10,marginLeft:10,marginRight:10}}>
                <Image source={require('../../../BottomBarScreens/Assets/Ratingstar.png')} style={{height:15,width:15}}></Image>
                <Image source={require('../../../BottomBarScreens/Assets/Ratingstar.png')} style={{height:15,width:15}}></Image>
                <Image source={require('../../../BottomBarScreens/Assets/Ratingstar.png')} style={{height:15,width:15}}></Image> 
                <Image source={require('../../../BottomBarScreens/Assets/Ratingstar.png')} style={{height:15,width:15}}></Image>
                <Image source={require('../../../BottomBarScreens/Assets/Ratingstar.png')} style={{height:15,width:15}}></Image>
                </View>
                <Text style={{ color: '#0379ff',fontSize:10,marginLeft:10,marginRight:10,textDecorationLine:'underline'}}>Rate & Review</Text>
            </Card>
            <Card>

                <Text style={{padding:10,}}>CUSINE</Text>
                <View style={{ flexDirection: 'row',padding:10 }}>
                    <TouchableOpacity style={{ borderColor: '#b5803b',fontSize:10, borderWidth: 1 ,width:70}}><Text style={{ color: '#b5803b',textAlign:'center' }}>Spanish</Text></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: '#b5803b',fontSize:10 ,borderWidth: 1 ,width:50,marginLeft:10}}><Text style={{ color: '#b5803b',textAlign:'center' }}>Italian</Text></TouchableOpacity>
                </View>



            </Card>

            <View>
                <Text style={{ marginLeft: 10 }}>Featured Dishes</Text>
            </View>

            <ScrollView horizontal={true}>
                <Card>
                    <View style={Styles.cardMainView}>
                        <View style={Styles.MainViewInnerView}>
                            <View>
                                <ImageBackground source={items.imageDish} style={Styles.backGroundImageStyle}>
                                <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Today: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                               
                                </ImageBackground>

                            </View>

                            <View style={Styles.txtmainview}>
                              <Text style={Styles.txtstyle}>{items.txtMeal}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Styles.txtstyle2} >{items.txtDollar1}</Text>
                                        <Text style={{color:'grey',fontsize:8}} >{items.txtSingle}</Text>
                                     
                                        </View>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Styles.txtstyle2} >{items.txtDollar2}</Text>
                                        <Text style={{color:'grey',fontsize:8}} >{items.txtfamily}</Text>
                                     </View>
                                  
                                </View>
                               
                                  
                            </View>

                        </View>

                        <View style={Styles.MainViewInnerView}>
                            <View>
                                <ImageBackground source={items.imageDish} style={Styles.backGroundImageStyle}>
                                <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Tomorrow: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                               
                                </ImageBackground>

                            </View>

                            <View style={Styles.txtmainview}>
                            <Text style={Styles.txtstyle}>{items.txtMeal}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Styles.txtstyle2} >{items.txtDollar1}</Text>
                                        <Text style={{color:'grey',fontsize:8}} >{items.txtSingle}</Text>
                                     
                                        </View>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Styles.txtstyle2} >{items.txtDollar2}</Text>
                                        <Text style={{color:'grey',fontsize:8}} >{items.txtfamily}</Text>
                                     
                                        </View>
                                  
                                </View>
                            </View>

                        </View>
                        <View style={Styles.MainViewInnerView}>
                            <View >
                                <ImageBackground source={items.imageDish} style={Styles.backGroundImageStyle}>
                                <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Today: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                                
                                </ImageBackground>

                            </View>

                            <View style={Styles.txtmainview}>

                            <Text style={Styles.txtstyle}>{items.txtMeal}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Styles.txtstyle2} >{items.txtDollar1}</Text>
                                        <Text style={{color:'grey',fontsize:8}} >{items.txtSingle}</Text>
                                     
                                        </View>
                                        <View style={{flexDirection:'row',marginLeft:5}}>
                                        <Text style={Styles.txtstyle2} >{items.txtDollar2}</Text>
                                        <Text style={{color:'grey',fontsize:8}} >{items.txtfamily}</Text>
                                     
                                        </View>
                                  
                                </View>
                            </View>

                        </View>
                    </View>
                </Card>

                <Card>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={Styles.MainViewInnerView}>
                            <View>
                                <ImageBackground source={items.imageDish} style={Styles.backGroundImageStyle}>
                                <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Tomorrow: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                               
                                </ImageBackground>

                            </View>

                            <View style={Styles.txtmainview}>

                                <View style={{ flex: 0.7 }}>
                                    <Text style={Styles.txtstyle}>{items.txtMeal}</Text>
                                    <Text style={Styles.txtstyle2} >{items.txtSingle}</Text>
                                </View>


                            </View>

                        </View>

                        <View style={Styles.MainViewInnerView}>
                            <View>
                                <ImageBackground source={items.imageDish} style={Styles.backGroundImageStyle}>
                                <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Today: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                              
                                </ImageBackground>

                            </View>

                            <View style={Styles.txtmainview}>

                                <View style={{ flex: 0.7 }}>
                                    <Text style={Styles.txtstyle}>{items.txtMeal}</Text>
                                    <Text style={Styles.txtstyle2} >{items.txtSingle}</Text>
                                </View>


                            </View>

                        </View>
                        <View style={Styles.MainViewInnerView}>
                            <View >
                                <ImageBackground source={items.imageDish} style={Styles.backGroundImageStyle}>
                                <View style={{ flex: .2, justifyContent: 'flex-end', top: 75, backgroundColor: 'rgba(242,243,244,0.8)', margin: 5 }}>
                                            <View>
                                                <Text style={{ color: 'black', fontSize: 10, marginLeft: 5 }}>Tomorrow: 1pm- 5pm</Text>
                                            </View>

                                        </View>
                                
                                </ImageBackground>

                            </View>

                            <View style={Styles.txtmainview}>

                                <View style={{ flex: 0.7 }}>
                                    <Text style={Styles.txtstyle}>{items.txtMeal}</Text>
                                    <Text style={Styles.txtstyle2} >{items.txtSingle}</Text>
                                </View>


                            </View>

                        </View>
                    </View>

                </Card>

            </ScrollView>
            </ScrollView>
        </View>);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderItem()}
            </View>
        );
    }
}