import React,{ Component } from 'react';
import { View, 
    Text, Image, ImageBackground, 
    TouchableOpacity, Alert,AsyncStorage,
    ActivityIndicator,StatusBar } 
    from 'react-native' 
import ImagePicker from 'react-native-image-picker';
import  { USER_IMAGEUPLOAD_URL, CHEF_DETAILS} from '../../../Config/Global'
import Loader from '../../../../Components/Loader';

var options;
export default class ProfilePicture extends Component{
   constructor(props)
    {
      super(props);
      this.state={
            checked:'',
            ImageSource:null,
            userImage: '',
            isLoading: 1
     }
    }

   static navigationOptions = ({
        title: 'Profile Picture',
        headerStyle: {
            backgroundColor: '#841314',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,
            width: '100%',
            marginLeft:40,
            fontWeight: '500'
        },
    });

    options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };
componentDidMount(){
      this.getUserData();
  }
async getUserData(){
  const userid = await AsyncStorage.getItem('userlogin');
  var details = {
    'userId':userid
   };
   var formBody = [];
   for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
   }
   formBody = formBody.join("&")
  fetch(CHEF_DETAILS, {
      method: 'POST',
      headers: {
      'Content-Type':'application/x-www-form-urlencoded'
      },
      body: formBody
      })
      .then((response) => response.json()
      )
      .then((serviceResponse) => {
          if(serviceResponse.success==1){
             this.setState({
             'userImage':serviceResponse.user_detail.attachment, 
             'isLoading': 0
          })  
          }
          else{
          }
        })
      .catch((error) => console.log(error));

  }
    PictureUpload()
    {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
             // const source = { uri: response.uri };
              this.setState({
                ImageSource: response,
              });
            }
          });
    }

   async OnProfileUpload() {
        this.setState({
          isLoading : 1
      })  
        const value = await AsyncStorage.getItem('userlogin');
        const {ImageSource} = this.state
        const formData = new FormData();
        formData.append('userId', value);
        formData.append('wp_user_avatar', {
          uri: ImageSource.uri,
          name: ImageSource.fileName,
          type: ImageSource.type
        });
        fetch(USER_IMAGEUPLOAD_URL,{
            method: 'POST',
            headers: {
               'Content-Type': 'multipart/form-data',
            },
            body: formData
           })
       .then((response) => response.json())
       .then((responseJson) => {
       // alert(JSON.stringify(responseJson));
              this.setState({
                isLoading : 0
            })  
            if (responseJson.success == 1) { 
               alert('Profile updated successfully');
               this.props.navigation.navigate('AccountSetting');
            }
          })
        .catch((error) => {
            console.error(error);
       });
    }


    render(){
      const {userImage, ImageSource, isLoading} = this.state;
      
       return(
              <View style={{flex:1,backgroundColor:'#fff'}}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                    <Text>Upload profile picture</Text>
                    
                     <View style={{height:170,width:170,marginTop:20,
                        justifyContent:'center',alignItems:'center',
                        backgroundColor:'lightgrey',borderRadius:170/2}}>
                         
                        {ImageSource != null ?
                        <Image style={{height:170,width:170,borderRadius:170/2}} source={ImageSource}>
                        </Image>:
                         <Image style={{height:170,width:170,borderRadius:170/2}} source={{uri:userImage}}>
                         </Image>
                        }
                        
                        </View>
                        <TouchableOpacity onPress={()=>this.PictureUpload()} style={{flexDirection:'row',marginTop:30}}>
                        <Text> or take a new photo </Text>
                        <Image style={{height:20,width:20}} 
                        resizeMode='contain'
                        source={require('../../Assets/photo-camera.png')}></Image></TouchableOpacity>
                        </View>
                       
                    <TouchableOpacity
                    onPress={()=>this.OnProfileUpload()}
                    style={{ backgroundColor:'#b5803b',height:40,marginTop:150,
                    justifyContent:'center',
                    }} ><Text style={{color:'white',textAlign:'center',fontSize:15}}>Update Profile Image</Text></TouchableOpacity>
                 {isLoading ? <Loader/> : <Text/>}
                </View>
                  
            )
        }
    } 