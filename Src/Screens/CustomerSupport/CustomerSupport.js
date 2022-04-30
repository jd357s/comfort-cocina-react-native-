import React,{Component} from 'react'
import {View,TextInput,Text,ScrollView,TouchableOpacity,Image} from 'react-native';
import CheckBox from 'react-native-checkbox'
import RadioGroup from 'react-native-radio-buttons-group';
export default class CustomerSupport extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            checked:'',
            data: [
                {
                  label: 'How can we help you?',
                },
                {
                  label: 'I have an issue with my order',
                  },
                  {
                    label: 'I have a comment about my cook',
                    },
                ],
        }
    }


    static navigationOptions = ({
        title: 'Customer Support',

        
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginLeft:60,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });
    onPress = data => this.setState({ data });
    
    
    render()
    {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return(
           <View style={{flex:1}}>
           <View style={{flex:1,marginTop:20}}>
            <View style={{marginLeft:20,}}>
            <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
            </View>
            </View>
           <View>
           <View style={{marginBottom:5}}>
                    <TouchableOpacity style={{ backgroundColor:'#b5803b',height:40,justifyContent:'center'}} ><Text style={{color:'white',textAlign:'center',fontSize:15}}>Send Note to Comfort Cocina</Text></TouchableOpacity>
                </View>
          </View>
      
          </View>

);
    }
}






