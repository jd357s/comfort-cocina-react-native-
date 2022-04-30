import React,{Component} from 'react'
import {StyleSheet,Dimensions} from 'react-native';
const deviceheight=Dimensions.get('window').height;
const devicewidth=Dimensions.get('window').width;
export default StyleSheet.create({
    mainview:
    {
        flex:1
    },
    renderItemStyleNew:{
        flexDirection:'row',
        // height:150,
        // borderColor:'grey',
        // borderBottomWidth:2,
        marginTop:10,
        marginBottom:10,
       
        
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
       borderRadius:50/2
        
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
    rating:{
        flex: 0.2,
        height: 15, 
        width: 15,
        padding:5
    },
    ratingWrap:{
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10, 
        paddingTop:5, 
        paddingBottom:5
    },
    dishView:{
      flex:.15,
    },
    filterview:
    { 
        height:60,
        backgroundColor:'#F8F8F8',
        flexDirection:'row',
        alignItems:'center'
    },
    cardMainViewnew:{
        shadowColor:'#ffffff',
        shadowOffset:{
            width:0,
            height:3
        } ,
        shadowRadius:5,
        shadowOpacity:1
    },
    cardMainView:{
        flexDirection:'row',
        // marginLeft:10
    },
    cardMainVieww:{
        flexDirection:'row',
       marginLeft:10,
       marginBottom:0
    },
    MainViewInnerView:
    {
        // flex: 0.6,
       // marginRight:2,
        margin:10
       
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
        borderRadius:50/2 ,
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
        color: '#ffffff',
         fontSize: 16 ,
         textAlign:'center',
         height:20,
         fontWeight: 'bold'

    }
})