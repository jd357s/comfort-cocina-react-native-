import React,{ Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert,AsyncStorage,ActivityIndicator,StatusBar } from 'react-native' 
export default class AuthLoading extends Component{
    constructor(props){
        super(props);
    }
    
   async componentDidMount(){
        await this.getUserAuth();
    }

    async getUserAuth(){
        try{
            const value = await AsyncStorage.getItem('userlogin');
            this.props.navigation.navigate(value ? 'Home':'LoginScreen');
        }
        catch(error){
        console.log('Error reterieving data' + error)
        }
    }

render(){
    return(
     <View style={{flex:1}}>
       <ActivityIndicator style={{flex:1,justifyContent:'center',alignItems:'center'}}></ActivityIndicator>
       <StatusBar barStyle="default"/>
     </View>
    )
}
}