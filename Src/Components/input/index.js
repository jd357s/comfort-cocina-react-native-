import React, { Component } from 'react'
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
class TextInputs extends Component {

    static propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        borderColor: PropTypes.string.isRequired,
        borderWidth: PropTypes.number.isRequired,
        borderRadius: PropTypes.number.isRequired,
        margin: PropTypes.number.isRequired,
        marginBottom: PropTypes.number.isRequired,
        marginTop: PropTypes.number.isRequired,
        marginLeft: PropTypes.number.isRequired,
        marginRight: PropTypes.number.isRequired,
        padding: PropTypes.number.isRequired,
        multiline: PropTypes.number.isRequired,
        numberOfLines: PropTypes.number.isRequired,
        placeholder: PropTypes.string.isRequired,
        placeholderTextColor: PropTypes.string.isRequired,
        secureTextEntry: PropTypes.string.isRequired,
        keyboardType: PropTypes.string.isRequired,
        
        secureTextEntry:PropTypes.bool.isRequired,
        onChangeText:PropTypes.func.isRequired,
        
        

    }
    render() {
        return (
            <View>
                <TextInput 
                    style={{
                        height: this.props.height,
                        width: this.props.width,
                        borderColor: this.props.borderColor,
                        borderWidth: this.props.borderWidth,
                        borderRadius: this.props.borderRadius,
                        margin: this.props.margin,
                        marginBottom: this.props.marginBottom,
                        marginTop: this.props.marginTop,
                        marginLeft: this.props.marginLeft,
                        marginRight: this.props.marginRight,
                        padding: this.props.padding,
                    }}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    maxLength={this.props.maxLength}
                    multiline={this.props.multiline}
                    numberOfLines={this.props.numberOfLines}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    paddingVertical={this.props.paddingVertical}
                    paddingHorizontal={this.props.paddingHorizontal}
                    secureTextEntry={this.props.secureTextEntry}
                ></TextInput>
            </View>
        );
    }
}

export default TextInputs;