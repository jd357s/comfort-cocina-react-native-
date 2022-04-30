import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTYpes from 'prop-types';
class Text1 extends Component {
    static propTYpes = {
        title: PropTYpes.string.isRequired,
        color: PropTYpes.string.isRequired,
        fontSize: PropTYpes.number.isRequired,
        fontWeight: PropTYpes.number.isRequired,
        justifyContent: PropTYpes.string.isRequired,
        alignItems: PropTYpes.string.isRequired,
        backgroundColor:PropTYpes.string.isRequired,
        alignText:PropTYpes.string.isRequired,
        textDecorationLine:PropTYpes.string.isRequired
    }
    render() {
        return (
            <View>
                <Text
                     style={{
                        color: this.props.color,
                        fontSize: this.props.fontSize,
                        fontWeight: this.props.fontWeight,
                        justifyContent: this.props.justifyContent,
                        alignItems: this.props.alignItems,
                        backgroundColor:this.props.backgroundColor,
                        alignText:this.props.alignText,
                        textDecorationLine:this.props.textDecorationLine
                        

                    }}
                >{this.props.title}</Text>
            </View>
        );
    }
}

Text1.defaultProps = {
    title: 'title'
}
export default Text1;