import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    cardMainView:{
        flexDirection:'row',
       
    },
    MainViewInnerView:
    {
        flex: 0.6,
        marginRight:2,
       
    },
    backGroundImageStyle:
    {
        height:105,
        width:140
    },
    txtmainview:
    {
        flex: .5, 
        // flexDirection: 'row',
        //  marginTop: 10,
         height:40
    },
    txtstyle:
    {
        color: 'black',
         fontSize: 10
    },
    txtstyle2:
    {
        color: 'grey', 
        fontSize: 8
    },
    barbaraChefView:
    {
        flexDirection: 'row',
        // marginLeft:10,
        // marginRight:10,
        // marginBottom:10
        height:60
    },
    chefImageView:
    {
        flex: 0.15, 
        marginLeft: 10,
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
    }
})