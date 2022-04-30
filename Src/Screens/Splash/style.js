import React,{Component} from 'react'
import {StyleSheet,Dimensions} from 'react-native'
const deviceheight=Dimensions.get('window').height;
const devicewidth=Dimensions.get('window').width;
export default StyleSheet.create({
splashmainview:
{
 flex:1
},
backGroundImageStyle:
{
    height:deviceheight-22,
    width:devicewidth,
    
},
imageviewStyle:
{
    justifyContent:'center',
    alignItems:'center',
    flex:1
},
imageStyle:
{
    height:60,
    width:240,
   
}
})