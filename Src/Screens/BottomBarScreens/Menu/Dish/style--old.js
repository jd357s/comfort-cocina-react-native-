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
        // flex:1,
        flexDirection:'row',
        // height:150,
        // borderColor:'grey',
        // borderBottomWidth:2,
        marginTop:10,
        marginBottom:10
    },
    renderitemChefimageStyle:
    {
        height:50,
        width:50,
       borderRadius:80/2
        
    },imageDishtyle:
    {
        flex:.5,
        // width:240,
         height:100
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
        
        height:60,
        backgroundColor:'#F8F8F8',
        flexDirection:'row',
        alignItems:'center',
        // marginLeft:20,marginRight:20,
        
        // justifyContent:'space-around'
    },
    cardMainView:{
        flexDirection:'row',
        // marginLeft:10
    },
    MainViewInnerView:
    {
        // flex: 0.6,
        marginRight:2,
       
    },
    backGroundImageStyle:
    {
        height:135,
        width:200,
        // margin:5
    },
    txtmainview:
    {
         flex:1,
        flexDirection: 'row',
        //  marginTop: 10,
         height:40,
        //  backgroundColor:'green'
    },
    txtstyle:
    {
        color: 'black',
         fontSize: 14 
    },
    txtstyle2:
    {
        color: 'grey', 
        fontSize: 10
    },
    barbaraChefView:
    {
        flexDirection: 'row',
        height:60
        // marginLeft:10,
        // marginRight:10,
        // marginBottom:10
    },
    chefImageView:
    {
        flex: 0.2, 
        marginLeft: 10,
        marginRight:5,
        
    },
    ChefImageStyle:{
        height: 50, 
        width: 50,
        top:5,
        borderRadius:40 ,
    },
    babaraTextView:
    {
        flex:0.4, 
        justifyContent: 'center',
        
    },
    markerImageStyle:
    {
        height: 15,
         width: 15 ,
         
    },
    reviewtxtSTyle:
    {
        // textDecorationLine: 'underline',
        color: 'white',
         fontSize: 14 ,
         textAlign:'center',
         height:20
    }
})