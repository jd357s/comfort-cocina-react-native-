import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native';
import StarRating from 'react-native-star-rating';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class FilterAndAllergies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 1,
            visible:false,
            visible1:'',
            color:false,
            eggPlant_color:false,
            Soy_color:false
          
        }
    }

    static navigationOptions = ({
        header: <View style={{ backgroundColor: '#841314', height: 50, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Filter</Text></View>,
        headerLeft: <TouchableOpacity><Image source={require('../../../BottomBarScreens/Assets/leftarrow.png')} style={{ height: 25, width: 25 }}></Image></TouchableOpacity>,
        headerRight: <TouchableOpacity><Text style={{ color: 'white' }}>Reset</Text></TouchableOpacity>,

        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 20
        },
    })

    onStarRatingPress(rating,backgroundColor1) {
        this.setState({
            starCount: rating,
          })
    }


    DollarPressMethod(index)
    {
        // alert(index)
        this.setState({
           
            visible:true,
          
        })
    }


    CheeseMethod()
    {
        this.setState({
            color:!this.state.color
        })
    }
    
    EggPlantMethod()
    {
        this.setState({
            eggPlant_color:!this.state.eggPlant_color
        })
    }
    
    SoyMethod()
    {
        this.setState({
            Soy_color:!this.state.Soy_color
        })
    }


    render() {
        return (
            <KeyboardAwareScrollView style={{flex:1}}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: .4, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'grey' ,height:60}}>
                    <View style={{ flex: .3, marginLeft: 10 }}>
                        <TouchableOpacity style={{ width:50 }}>
                            <Text style={{ fontSize: 14, color: '#0379ff' }}>Sort</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: .8 ,alignItems:'flex-end'}}>
                        <TouchableOpacity style={{ width: 125 }}>
                            <Text style={{ fontSize: 14, color: '#0379ff'}}>Price(High to Low)</Text>
                        </TouchableOpacity>
                    </View>


                </View>




                <View style={{ flex: .5, borderBottomWidth: 1, borderBottomColor: 'grey' ,height:120}}>
                    <Text style={{ fontSize: 12, color: '#0379ff', marginLeft: 10, top: 10 }}>Rating</Text>
                  <View style={{flex:.59,top:15,height:50, borderColor: 'grey', borderWidth: 1, margin: 10,borderRadius:5,backgroundColor:'white',justifyContent:'center'}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        starSize={20}
                        starStyle={{margin:10}}
                        emptyStarColor='#b5803b'
                        
                        fullStarColor='#b5803b'
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
</View>
                </View>

                <View style={{ flex: .2, borderBottomWidth: 1, borderBottomColor: 'grey' }}>

                    <View style={{ flex: .4, flexDirection: 'row', alignItems: 'center' }}>


                        <View style={{ flex: .8, marginLeft: 10 ,justifyContent:'center',height:30}}>
                            <TouchableOpacity style={{ width: 50 }}>
                                <Text style={{ fontSize: 14, color: '#0379ff' }}>Price</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flex: .2,marginRight:10}}>
                            <TouchableOpacity>
                                <View style={{flexDirection: 'row'}}>

                                    <View style={{ height: 15 }}>

                                        <Image resizeMode='contain' source={require('../../../BottomBarScreens/Assets/filter.png')} style={{ height: 14, width: 40 }}></Image>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, color: '#0379ff' }}>Filter</Text>

                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>



                    </View>
                    <View style={{ flexDirection: 'row', flex: .5, borderColor: 'grey', borderWidth: 1, margin: 10, borderRadius: 5,height:50 }}>

                    <TouchableOpacity onPress={(index)=>this.DollarPressMethod(index)} style={{flex:.2}}>
                       {this.state.visible==false?    
                        <View style={{ flex: 1, justifyContent: 'center',alignItems:'center', borderTopColor: '#b5803b',borderBottomColor:'#b5803b', borderBottomWidth: 3,borderTopWidth:3}}>
                       
                            <Text>$</Text>
                          
                        </View> : 


<View style={{ flex: 1, justifyContent: 'center',alignItems:'center',backgroundColor:'red' }}>
                       
                       <Text>$</Text>
                     
                   </View>


                       }
                        </TouchableOpacity>
                        <View style={{ flex: .2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>$$</Text>
                        </View>
                        <View style={{ flex: .2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>$$$</Text>
                        </View>
                        <View style={{ flex: .2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>$$$$</Text>
                        </View>
                        <View style={{ flex: .2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>$$$$$</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: .6, borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                    <View style={{ height: 50 }}>
                        <View style={{ marginTop: 5, marginLeft: 20, marginBottom: 5 }}>
                            <Text style={{ color: '#841314', fontSize: 14, fontWeight: '400' }}>Allergies</Text>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 20 }}>
                            <TouchableOpacity onPress={()=>this.SoyMethod()} style={{ borderColor:(this.state.Soy_color) ? '#b5803b' :'#841314', borderWidth: 1, height: 25, width: 40, alignContent: 'center', marginRight: 5, justifyContent: 'center' }}>
                                <Text style={{ color: '#b5803b', fontSize: 12, textAlign: 'center' }}>Soy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.EggPlantMethod()} style={{ borderColor:(this.state.eggPlant_color) ? '#b5803b' : '#841314', borderWidth: 1, height: 25, width: 80, marginRight: 5, justifyContent: 'center' }}>
                                <Text style={{ color: '#b5803b', fontSize: 12, textAlign: 'center' }}>Eggplant</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.CheeseMethod()} style={{ borderColor: (this.state.color) ? '#b5803b':'#841314', borderWidth: 1, height: 25, width: 60, marginRight: 5, justifyContent: 'center' }}>
                                <Text style={{ color: '#b5803b', fontSize: 12, textAlign: 'center' }}>Cheese</Text>
                            </TouchableOpacity>
                        </View>




                    </View>




                    <View style={{ height: 50,flex:.7, flexDirection: 'row', marginLeft: 20, alignItems: 'center'}}>

                        <View style={{flex:.7}}>
                            <Text style={{ color: '#841314', fontSize: 14 }}>Delete Ingredient?</Text>
                        </View>

                        <View style={{ flex:.7,flexDirection: 'row',marginLeft:10,alignItems:'center'}}>

                            <View>
                                <TouchableOpacity style={{width:70,height:30,backgroundColor:'#82e480'}}>
                               <View style={{flexDirection:'row'}}>
                                <Image source={require('../../../BottomBarScreens/Assets/AllergyImage/okDelte.png')} style={{height:20,width:20,alignItems:'center',top:5}}></Image>
                                 <Text style={{top:5}}>Delete</Text>
                                </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{marginLeft:10}}>
                                <TouchableOpacity style={{width:70,height:30,backgroundColor:'#d84454',alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>

                                <Image source={require('../../../BottomBarScreens/Assets/AllergyImage/cancelicon.png')} style={{height:20,width:20,alignItems:'center',top:5}}></Image>

                                <Text style={{top:5}}>Cancel</Text>
                                </View>
                                
                                </TouchableOpacity>

                            </View>



                        </View>


                    </View>



                    <View>
                        <View style={{ height: 40, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                            <View style={{ flex: .1,alignItems:'center',justifyContent:'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../../BottomBarScreens/Assets/AllergyImage/searchicon.png')} style={{height:20,width:20,alignItems:'center'}}></Image>
                                </TouchableOpacity>
                      </View>

                            <View style={{height:40}}>
                                <TextInput style={{ borderBottomColor: '#841314', borderBottomWidth: .5 }}
                                    placeholder="search ingredients"
                                    placeholderTextColor='#841214'
                                    placeholderStyle='italic'
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 40, justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#841314', fontSize: 16 }}>Common Allergens</Text>

                    </View>
                    <View style={{ height: 40, borderBottomColor: 'grey', borderBottomWidth: 1, justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#b5803b' }}>Soy</Text>
                    </View>

                    <View style={{ height: 40, borderBottomColor: 'grey', borderBottomWidth: 1, justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#b5803b' }}>Peanut</Text>
                    </View>

                    <View style={{ height: 40, justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#b5803b' }}>Almonds</Text>
                    </View>
                </View>



                <View style={{ flex: .2 ,top:10}}>
                    <TouchableOpacity style={{ backgroundColor: '#b5803b', height: 40, justifyContent: 'center',marginLeft:10,marginRight:10 }} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Update</Text></TouchableOpacity>
                </View>
            </View>
            </KeyboardAwareScrollView>
            );
    }
}