import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

export default class Allegries extends Component {



    static navigationOptions = ({
        title: 'Allergies',

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

constructor(props)
{
    super(props);
    this.state={
        color:false,
        eggPlant_color:false,
        Soy_color:false
    }
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: .9 }}>
                    <View style={{ height: 60 }}>
                        <View style={{ marginTop: 5, marginLeft: 20, marginBottom: 5 }}>
                            <Text style={{ color: '#841314', fontSize: 14, fontWeight: '400' }}>Ingredients</Text>

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




                    <View style={{ height: 50, flexDirection: 'row', marginLeft: 20, alignItems: 'center' }}>

                        <View style={{flex:.7}}>
                            <Text style={{ color: '#841314', fontSize: 14 }}>Delete Ingredient?</Text>
                        </View>

                        <View style={{ flex:.7,flexDirection: 'row',marginLeft:10,alignItems:'center'}}>

                            <View>
                                <TouchableOpacity style={{width:70,height:30,backgroundColor:'#82e480'}}>
                               <View style={{flexDirection:'row'}}>
                                <Image source={require('././BottomBarScreens/Assets/AllergyImage/okDelte.png')} style={{height:20,width:20,alignItems:'center',top:5}}></Image>
                                 <Text style={{top:5}}>Delete</Text>
                                </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{marginLeft:10}}>
                                <TouchableOpacity style={{width:70,height:30,backgroundColor:'#d84454',alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>

                                <Image source={require('././BottomBarScreens/Assets/AllergyImage/cancelicon.png')} style={{height:20,width:20,alignItems:'center',top:5}}></Image>

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
                                <Image source={require('././BottomBarScreens/Assets/AllergyImage/searchicon.png')} style={{height:20,width:20,alignItems:'center'}}></Image>
                                </TouchableOpacity>
                      </View>

                            <View style={{ flex: .9 }}>
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
                <View style={{ flex: .1 }}>
                    <TouchableOpacity style={{ backgroundColor: '#b5803b', height: 50, justifyContent: 'center' }} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Update</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}