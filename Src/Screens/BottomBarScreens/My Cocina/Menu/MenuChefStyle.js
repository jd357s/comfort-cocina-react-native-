import React,{Component} from 'react'
import {StyleSheet,Dimensions} from 'react-native';
const deviceheight=Dimensions.get('window').height;
const devicewidth=Dimensions.get('window').width;
export default StyleSheet.create({
    mainview:
    {
        flex:1
    },
    renderItemStyle:
    {
        flex:1,
        flexDirection:'row',
      
        marginTop:10
    },
    renderitemChefimageStyle:
    {
        height:40,
        width:40,
       borderRadius:80/2
        
    },imageDishtyle:
    {
        width:devicewidth-72,
        height:120
    },
    flatlistView:
    {
        flex:0.8
    },
    dishView:{
flex:.15,

    },
    filterview:
    {
        
        height:30,
        backgroundColor:'#F8F8F8',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,marginRight:20,
        
        // justifyContent:'space-around'
    },
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
        width:130
    },
    txtmainview:
    {
        flex: 0.1, 
        flexDirection: 'row',
         marginTop: 10
    },
    txtstyle:
    {
        color: 'black',
         fontSize: 12 
    },
    txtstyle2:
    {
        color: 'grey', 
        fontSize: 10
    },
    barbaraChefView:
    {
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        marginBottom:10
    },
    chefImageView:
    {
        flex: 0.25, 
        marginLeft: 10
    },
    ChefImageStyle:{
        height: 40, 
        width: 40,
        top:10,
        borderRadius:40 
    },
    babaraTextView:
    {
        flex:0.4, 
        justifyContent: 'center'
    },
    markerImageStyle:
    {
        height: 10,
         width: 15 ,
         top:10
    },
    reviewtxtSTyle:
    {
        // textDecorationLine: 'underline',
        color: 'white',
         fontSize: 14 ,
         textAlign:'center'
    }
})