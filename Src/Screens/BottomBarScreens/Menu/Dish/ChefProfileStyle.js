import React,{Component} from 'react'
import {StyleSheet,Dimensions} from 'react-native'
const devicewidth=Dimensions.get('window').width
export default StyleSheet.create({
    cardMainView:{
        flexDirection:'row',
        marginLeft:10
    },
    MainViewInnerView:
    {
        flex: 0.6,
        marginRight:2,
       
    },
    backGroundImageStyle:
    {
        height:105,
        width:160
    },
    txtmainview:
    {
        
        // flexDirection: 'row',
         marginTop: 10,
         
    },
    txtstyle:
    {
        color: 'black',
         fontSize: 14,
        
    },
    txtstyle2:
    {
        color: 'black', 
        fontSize: 10,top:5
    },
    barbaraChefView:
    {
        flexDirection: 'row',
       height:60
    },
    chefImageView:
    {
        flex: 0.2, 
        marginLeft: 10,
        marginRight:5,
       alignItems:'center',
        justifyContent:'center'
    },
    ChefImageStyle:{
        height: 50, 
        width: 50,
        top:5,
        borderRadius:40 
    },
    babaraTextView:
    {
        flex:0.4, 
        justifyContent: 'center'
    },
    markerImageStyle:
    {
        height: 15,
         width: 15 ,
        //  top:10
    },
    reviewtxtSTyle:
    {
        textDecorationLine: 'underline',
        color: '#0379ff',
         fontSize: 12 ,
         textAlign:'center'
    },
    chefimage:
    {
        width:devicewidth-10,
        height:150
    }
})