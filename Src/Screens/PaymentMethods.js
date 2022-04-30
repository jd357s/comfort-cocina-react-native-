import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class PaymentMethod extends Component{
    
    
    static navigationOptions = ({
        title: 'PaymentMethod',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginLeft:40,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });


    AddCardMethod()
    {
        this.props.navigation.navigate('AddPaymentInfo')
    }
    
    render()
    {
        return(
        <View style={{flex:1}}>
<View style={{flex:.15,justifyContent:'center'}}>
<TouchableOpacity onPress={()=>this.AddCardMethod()}><Text style={{justifyContent:'center',alignSelf:'center'}}>Add Card</Text></TouchableOpacity>
</View>
        </View>
        );
    }
}