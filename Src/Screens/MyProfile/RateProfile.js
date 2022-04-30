import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,Image,TextInput,ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';
import {Card} from 'native-base'
import Buttn from '../../Components/touch/index'
export default class RateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 4
        };






        
      }


      static navigationOptions = ({
        title: 'Rate Profile',

        
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '100%',
            // textAlign: 'center',
            marginLeft:30,
            fontWeight: '500'
        },
    });







      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

      





  render() {
    return (
      <ScrollView style={styles.mainContainer}>
      <View style={{alignItems:'center'}}>
          <Image style={{height:170,width:170,borderRadius:170/2,marginTop:10}} source={require('../BottomBarScreens/Assets/RateProfilePhoto.png')}></Image>
          <Text style={{fontSize:25,marginTop:20}}>Barbara</Text>
          <Text style={{fontSize:20,marginTop:20}}>Show your food experience</Text>

          <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'#b5803b'}
        starSize={40}
        interitemSpacing={10}
      />
          </View>
         <View style={{marginTop:20,marginLeft:20,marginRight:20}}>
          <Text style={{fontSize:20}}>Review</Text>
          <Card style={{height:150}}>
          <TextInput style={{marginLeft:10,fontSize:18}} multiline={true} placeholder='Write your review...'></TextInput>
          </Card>
          
         </View>
         <View style={{flex:1,alignItems:'flex-end',marginRight:20,marginTop:10,marginBottom:10}}>
         <Text style={{alignItems:'flex-end'}}>@200</Text></View>
         <Buttn title="Submit"
                        height={50} justifyContent='center' backgroundColor='#b5803b'
                        alignSelf='center' color1='white'
                        borderRadius={2}
        ></Buttn>
     </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    }
});