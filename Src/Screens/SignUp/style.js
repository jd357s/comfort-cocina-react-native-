import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native'



const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

export default StyleSheet.create({
    splashmainview:
    {
        flex: 1,
      

    },
    backGroundImageStyle:
    {
        height: deviceheight - 120,
        width: devicewidth,
  
        borderColor: 'grey',
        borderBottomWidth: 1,
        
    },
    imageviewStyle:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .25,
    },
    imageStyle:
    {
        height: 48,
        width: 240,
        top: 15,

    },
    TxtinptStyle:
    {

        borderColor: '#b5803b',
        borderWidth: 1,
        height: 33,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 12,




    },
})