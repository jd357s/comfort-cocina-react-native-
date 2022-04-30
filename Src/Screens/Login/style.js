import React,{Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const deviceheight=Dimensions.get('window').height;
const devicewidth=Dimensions.get('window').width;

export default StyleSheet.create({
    splashmainview:
    {
     flex:1,
     paddingBottom:10
    },
    backGroundImageStyle:
    {
        height:deviceheight-90,
        width:devicewidth,
        
    },
    imageviewStyle:
    {
        justifyContent:'center',
        alignItems:'center',
        flex:.25,
    },
    imageStyle:
    {
        height:60,
        width:240,
       top:10,
      
    }
})