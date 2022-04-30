import React, { Component } from 'react'
import { View, TouchableOpacity ,Text} from 'react-native';

import PropTypes from 'prop-types'

class Touch extends Component {

    static propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        borderColor: PropTypes.string.isRequired,
        borderWidth: PropTypes.number.isRequired,
        margin: PropTypes.number.isRequired,
        marginBottom: PropTypes.number.isRequired,
        marginTop: PropTypes.number.isRequired,
        marginLeft: PropTypes.number.isRequired,
        marginRight: PropTypes.number.isRequired,
        padding: PropTypes.number.isRequired,
        backgroundColor:PropTypes.string.isRequired,
        color:PropTypes.string.isRequired,
        fontSize:PropTypes.number.isRequired,
        fontWeight:PropTypes.number.isRequired,
        justifyContent:PropTypes.string.isRequired,
        alignItems:PropTypes.string.isRequired,
        onPress:PropTypes.func.isRequired,
        alignItemsText:PropTypes.string.isRequired,
        alignSelf:PropTypes.string.isRequired,
        justifyContentText:PropTypes.string.isRequired,
        color1:PropTypes.string.isRequired,
        borderRadius:PropTypes.string.isRequired,
       

    }

    render() {
        return (
            <TouchableOpacity
                style={{
                    height: this.props.height,
                    width: this.props.width,
                    borderColor: this.props.borderColor,
                    borderWidth: this.props.borderWidth,
                    margin: this.props.margin,
                    marginBottom: this.props.marginBottom,
                    marginTop: this.props.marginTop,
                    marginLeft: this.props.marginLeft,
                    marginRight: this.props.marginRight,
                    padding: this.props.padding,
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color,
                    fontSize: this.props.fontSize,
                    fontWeight: this.props.fontWeight,
                    justifyContent: this.props.justifyContent,
                    alignItems: this.props.alignItems,
                    borderRadius:this.props.borderRadius
                    
                }}
                onPress={this.props.onPress}
                
                >
                <Text
               
                
                style={{
                    color: this.props.color1,
                    fontSize: this.props.fontSize,
                    fontWeight: this.props.fontWeight,
                    justifyContent: this.props.justifyContentText,
                    alignItems: this.props.alignItemsText,
                    alignSelf:this.props.alignSelf,
                    textDecorationLine:this.props.textDecorationLineText
                    

                }}>{title=this.props.title}</Text></TouchableOpacity>
        );
    }
}


export default Touch;