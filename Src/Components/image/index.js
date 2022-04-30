import React,{Component} from 'react';
import {Image} from 'react-native'

import PropTypes from 'prop-types'

class Image extends Component{
static propTypes={
height:PropTypes.number.height,
width:PropTypes.number.width,
borderRadius:PropTypes.number.borderRadius
}

    render()
    {
        return(
            <Image source={this.props.source} 
            style={{height:this.props.height,
            width:this.props.width,
            borderRadius:this.props.borderRadius
            }}
            resizeMode={this.props.resizeMode}
            ></Image>
        );
    }
}