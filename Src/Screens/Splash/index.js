import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import style from './style'
export default class Splash extends Component {

componentWillMount()
{
    setTimeout(() => {
        this.props.navigation.navigate('LoginScreen')
        }, 1000);
}

    render() {
        return (
            <View style={style.splashmainview}>

                <ImageBackground
                    resizeMode='stretch'
                    style={style.backGroundImageStyle}
                    source={require('../../Assets/SplashImage/splashbackground.png')} >
                    <View style={style.imageviewStyle} >
                        <Image
                            resizeMode='contain'
                            source={require('../../Assets/SplashImage/splashlogo1.png')}
                            style={style.imageStyle}
                        >
                        </Image>

                    </View>
                </ImageBackground>



            </View>
        );
    }
}