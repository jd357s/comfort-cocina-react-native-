import React, { Component } from 'react'
import { View, TextInput, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import Txt from '../../Components/text/index';
// import Style from './Myprofilestyle'

export default class ChefUseAgreement extends Component {

constructor(props)
{
    super(props)
    const {params}= this.props.navigation.state;
    let term_condition = params.Data.term_condition;
    let chef_agreement = params.Data.chef_agreement;
    let micro_agreement = params.Data.micro_agreement;
    this.state={
        termCondition: term_condition,
        chefAgreement: chef_agreement,
        microAgreement: micro_agreement
    }
   
}
componentWillUnmount(){
    const {params}= this.props.navigation.state;
    params.callChef();
}

    static navigationOptions = ({
        title: 'Chef Use Agreements',


        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            marginRight:50,
            // textAlign: 'center',
            fontWeight: '500'
        },
    });

    render() {
        const{termCondition, chefAgreement, microAgreement} = this.state;
        //alert(term_condition); 
        //alert(micro_agreement);
        return (
            <View style={{ flex: 1 }}>
           
                <View style={{ height: 70, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                 
                    <View style={{ flex: .7, marginLeft: 20 }}>
                        <Text style={{ color: '#830000' }}>Terms & Condition</Text>
                        <Text style={{ color: '#b5803b', fontSize: 12 ,fontWeight:'100'}}>Review and accept terms of conditions of using our service</Text>
                    </View>
                   

                    <View style={{ flex: .3 }}>
                        {termCondition === 0 ?
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('TermsAndCondition')} >
                         <Text style={{color:'#b5803b',marginLeft:30}}>Review</Text> 
                         </TouchableOpacity> :
                          <Text style={{color:'#b5803b',marginLeft:30}}>Accepted</Text> 
                         }
                    </View>
                   
                </View>
  

               
                <View style={{height: 80, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#E5E7E9' }}>
                    <View style={{ flex: .7, marginLeft: 20 }}>
                        <Text style={{ color: '#830000' }}>Chef Agreement</Text>
                        <Text style={{ color: '#b5803b', fontSize: 12,fontWeight:'100'}}>Review and accept terms and agreement between Comfort Cocina and our chefs</Text>
                    </View>

                    <View style={{ flex: .3 }}>
                    {chefAgreement == 0 ?
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChefAgreement')} >
                          <Text style={{color:'#b5803b',marginLeft:30}}>Review</Text>
                          </TouchableOpacity>
                         :
                         <Text style={{color:'#b5803b',marginLeft:30}}>Accepted</Text>
                        }
                        
                    </View>
                </View>
               
               
                <View style={{height:80, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{ flex: .7, marginLeft: 20 }}>
                        <Text style={{ color: '#830000' }}>Microenterprise Agreement</Text>
                        <Text style={{ color: '#b5803b', fontSize: 12 ,fontWeight:'100'}}>Review CA state laws regarding Microenterprise Kitchen and the regulations to remain in good standing</Text>
                    </View>

                    <View style={{ flex: .3 }}>
                        { microAgreement == 0 ?
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MicroEnterPrise')} >
                         <Text style={{color:'#b5803b',marginLeft:30}}>Review</Text>
                         </TouchableOpacity> :
                         <Text style={{color:'#b5803b',marginLeft:30}}>Accepted</Text> }
                    </View>
                </View>
                
                <View style={{height:250,borderBottomColor:'lightgrey',borderBottomWidth:1}}>
                  </View>
                  <View style={{margin:10}}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('MenuScreen')}
                    style={{ backgroundColor:'#b5803b',height:40,justifyContent:'center',borderRadius:5}} ><Text style={{color:'white',textAlign:'center',fontSize:15}}>Continue</Text></TouchableOpacity>
                </View>
                    </View>
                    )
    }
}