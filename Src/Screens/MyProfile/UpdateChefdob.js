import React,{Component} from 'react'
import {View,TextInput,Text,ScrollView,TouchableOpacity,Image,AsyncStorage,Alert, ActivityIndicator} from 'react-native';
import Txt from '../../Components/text/index';
import Style from './Myprofilestyle'
import {CHEF_REGISTER} from '../../Screens/Config/Global';
import MyDatePicker from '../../Components/datePicker/index';
import Loader from '../../Components/Loader';

export default class UpdateChefdob extends Component{

constructor(props)
    {
        super(props)
        {
            const {params}= this.props.navigation.state;
            let dob = params.Data.dob;
            this.state={
                dob:dob,
                isLoading: 0
            }
        }
  }
  componentWillUnmount(){
      const {params}= this.props.navigation.state;
      params.callChef();
  }

  static navigationOptions = ({
        title: 'My Profile',
        // headerLeft: <TouchableOpacity  ><Image source={require('../../Assets/SignUpImage/leftarrow.png')} style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>,
        headerRight:'',
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '70%',
            textAlign: 'center',
            fontWeight: '500'
        },
    });
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

async myProfileUpdate(){
        this.setState({isLoading: 1})
        const value = await AsyncStorage.getItem('userlogin');
        var details = {
          'userId':value,
          'dob':this.state.dob,
         };
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&")
       
         fetch(CHEF_REGISTER, {
         method: 'POST',
         headers: {
         'Content-Type':'application/x-www-form-urlencoded'
         },
         body: formBody
         })
         .then((response) => response.json()
         )
         .then((serviceResponse) => {
             this.setState({isLoading: 0})
             if(serviceResponse.success==1){
                 alert('Updated Succesfully')
                 this.props.navigation.navigate('ChefRegistration',{
                    mobile:this.state.mobile,
                 })
                  
             }
             else{
                 //  alert('Please enter valid email and address')
             }
           })
         .catch((error) => console.log(error));
        }
     
    render()
      {
          const {isLoading} = this.state;
        return(
            <View style={Style.mainView}>
            <View style={Style.PersonalInfoView}>
            <Text style={Style.PersonalInfoTxtStyle}>Personal Info</Text>
            </View>
            <ScrollView style={{flex:.9}}>
            <View style={{flex:.9,marginLeft:20,marginRight:20}}>
                <Text style={{color:'#b5803b'}}>Date Of Birth</Text>
                  <MyDatePicker width={200} date={this.state.dob} placeHolder='select date' maxDate='2019-06-01' 
                                 onDateChange={val => this.onChangeText('dob', val)}
                                 confirmBtnText='Confirm'
                                 cancelBtnText='Cancel'/> 
                
                </View>
            </ScrollView>
            <View style={{flex:.1}}>
                    <TouchableOpacity onPress={()=>this.myProfileUpdate()} 
                    style={Style.touchStyle}><Text style={{color:'white',textAlign:'center'}}>Update</Text></TouchableOpacity>
                </View>
                {isLoading ? <Loader/> : <Text/>}
            </View>
            );
    }
}