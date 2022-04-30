import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import StarRating from 'react-native-star-rating';
export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 1,
            visible:false,
            visible1:''
          
        }
    }

    static navigationOptions = ({
        title: 'Filter',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '70%',
            marginRight:50,
            textAlign: 'center',
            fontWeight: '500'
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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: .15, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                    <View style={{ flex: .5, marginLeft: 10 }}>
                        <TouchableOpacity style={{ width: 50 }}>
                            <Text style={{ fontSize: 14, color: '#0379ff' }}>Sort</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: .5 }}>
                        <TouchableOpacity style={{ width: 125 }}>
                            <Text style={{ fontSize: 14, color: '#0379ff' }}>Price(High to Low)</Text>
                        </TouchableOpacity>
                    </View>


                </View>




                <View style={{ flex: .25, borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                    <Text style={{ fontSize: 12, color: '#0379ff', marginLeft: 10, top: 10 }}>Rating</Text>
                  <View style={{flex:.75,top:20, borderColor: 'grey', borderWidth: 1, margin: 10,borderRadius:5,backgroundColor:'white',justifyContent:'center'}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        
                        emptyStarColor='#b5803b'
                        
                        fullStarColor='#b5803b'
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
</View>
                </View>

                <View style={{ flex: .30, borderBottomWidth: 1, borderBottomColor: 'grey' }}>

                    <View style={{ flex: .6, flexDirection: 'row', alignItems: 'center' }}>


                        <View style={{ flex: .6, marginLeft: 10 }}>
                            <TouchableOpacity style={{ width: 50 }}>
                                <Text style={{ fontSize: 14, color: '#0379ff' }}>Price</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flex: .4, marginRight: 10 }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ height: 15 }}>

                                        <Image resizeMode='contain' source={require('../../../BottomBarScreens/Assets/filter.png')} style={{ height: 15, width: 40 }}></Image>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, color: '#0379ff' }}>Filter</Text>

                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>



                    </View>
                    <View style={{ flexDirection: 'row', flex: .5, borderColor: 'grey', borderWidth: 1, margin: 10, borderRadius: 5 }}>

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

            </View>);
    }
}