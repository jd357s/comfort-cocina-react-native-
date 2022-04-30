import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native'

export default class Loader extends Component {
    render() {
         return (
            <View style={{ position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.25)' }} pointerEvents={'none'}>
            <ActivityIndicator style={{ height: 80 }} color="#841314" size="large" />
            </View>
         )
    }
}
