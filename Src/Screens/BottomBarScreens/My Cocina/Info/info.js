import React, { Component } from 'react'
import { View, TextInput, Text, ScrollView, 
    TouchableOpacity, Image, FlatList ,Dimensions,AsyncStorage,Alert,
} from 'react-native';
// import { exportDefaultSpecifier } from '@babel/types';

// import Txt from '../../Components/text/index';
// import Style from './Myprofilestyle'
const devicewidth=Dimensions.get('window').width
export default class Info extends Component {


    constructor(props) {
        super(props);
        this.state = {
            arr_accountSetting: [{txtInfo: 'FAQ',InfoLeftArrowImage:require('../../../BottomBarScreens/Assets/InfoLeftArrow.png')},
           {txtInfo: 'Becoming A Chef',InfoLeftArrowImage:require('../../../BottomBarScreens/Assets/InfoLeftArrow.png')},
           {txtInfo: 'About Us',InfoLeftArrowImage:require('../../../BottomBarScreens/Assets/InfoLeftArrow.png')},
           {txtInfo: 'Getting Certified',InfoLeftArrowImage:require('../../../BottomBarScreens/Assets/InfoLeftArrow.png')},
           {txtInfo: 'How To?',InfoLeftArrowImage:require('../../../BottomBarScreens/Assets/InfoLeftArrow.png')},
         
           
  ]
        }
    }


    static navigationOptions = ({
        title: 'Info',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginLeft:40,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });

PressMethod(index)
{
alert(index)
}

    renderItem=({item,index}) => {
        return (
            <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.PressMethod(index)}>
                <View style={{height:50,flexDirection:'row',borderBottomColor:'lightgrey',borderBottomWidth:1,alignItems:'center',backgroundColor:'white'}}>
              
                <View style={{flex:.9,marginLeft:10}}>
                <Text style={{color:'#830000'}}>{item.txtInfo}</Text>

                </View>
                <View style={{marginLeft:20}}>
                <Image source={item.InfoLeftArrowImage} resizeMode='contain' style={{height:16,width:16}}></Image>

                </View>
                </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex:1}}>
                <FlatList
                    data={this.state.arr_accountSetting}
                    renderItem={this.renderItem}
                />
              
            </View>
        );
    }
}