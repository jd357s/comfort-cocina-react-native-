import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, Alert, AsyncStorage, TextInput, ActivityIndicator } from 'react-native'
import Loader from '../../../../Components/Loader';
import { ADD_DISH_URL, INGREDIENTLIST, SEARCHINGREDIENT, ALLERGYLIST, SEARCHALLERGY } from '../../../Config/Global';

export default class NewDish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ImageSource1: null,
            ImageSource2: null,
            ImageSource3: null,
            ImageSource4: null,
            userId: '',
            Ingrediants: '',
            Dishname: '',
            visible: true,
            visible1: true,
            visible2: true,
            singLePrice: '',
            familyPrice: '',
            visibleIngredients: false,
            visibleAllergies: false,
            dishDiscription: '',
            isLoading: 0,
            ingredientlists:[],
            ingredient_names:[],
            allergieslists:[],
            allergies_names:[],
            new_ing :'',
            new_allergy :'',
            recurring_schedule: '', 
            orderLimit:'',
            product_valid_days: '',
            singleLimit: '',
            familyLimit: '',
            product_valid_date: ''
        }
    }
    static navigationOptions = ({
        title: 'New Dish',
        // headerLeft: <TouchableOpacity  ><Image source={require('../../Assets/SignUpImage/leftarrow.png')} style={{ height: 20, width: 20, marginLeft: 20 }}></Image></TouchableOpacity>,
        headerRight: '',
        headerStyle: {
            backgroundColor: '#841314',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,

            width: '50%',
            marginLeft: 50,
            textAlign: 'center',
            fontWeight: '500'
        },
    });

    

    actionCamera(camValue) {
        var ImagePicker = require('react-native-image-picker');


        var options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = response;
                if (camValue == 'avatarSource1') {
                    this.setState({
                        avatarSource1: source
                    });
                }
                else if (camValue == 'avatarSource2') {
                    this.setState({
                        avatarSource2: source
                    });
                }
                else if (camValue == 'avatarSource3') {
                    this.setState(
                        {
                            avatarSource3: source
                        }
                    );
                }


                else {
                    this.setState({
                        avatarSource4: source
                    });
                }

                let source1 = { uri: 'data:image/jpeg;base64,' + response.data };
                // Alert.alert( JSON.stringify(source1))
            }
        });


    }
    onScheduleDish() {
        this.props.navigation.navigate('ScheduleDish',{
            refresh : this.refresh.bind(this),
          })
    }
    refresh= (data) => {
        this.setState({
            recurring_schedule:  data.recurringSwitch,
            orderLimit: data.orderLimit,
            product_valid_days: data.recurringDays,
            singleLimit: data.singleLimit,
            familyLimit: data.familyLimit,
            product_valid_date: data.recurringDays
        });
        // some other stuff
      };
    async OnSaveDish() {
            this.setState({isLoading: 1 })
            const value = await AsyncStorage.getItem('userlogin');
            const {avatarSource1, avatarSource2, avatarSource3, avatarSource4} = this.state
            const formData = new FormData();
            let ingredients = this.state.ingredient_names;
            let ingredient_ids = '';
            let lastindex = ingredients.length -1;
            for (let i=0; i < ingredients.length; i++) {
                ingredient_ids += ingredients[i].id 
                if( i != lastindex){
                ingredient_ids += ',';
                }
            }

            let allergies = this.state.allergies_names;
            let allergies_ids = '';
            let lastindexx = allergies.length -1;
            for (let i=0; i < allergies.length; i++) {
                allergies_ids += allergies[i].id 
                if( i != lastindexx){
                    allergies_ids += ',';
                }
            }

            let rec_days = this.state.product_valid_days;
            let recrng_days = '';
            let recindexx = rec_days.length -1;
            for (let i=0; i < rec_days.length; i++) {
                recrng_days += rec_days[i];
                if( i != recindexx){
                    recrng_days += ',';
                }
            }

            let rec_date = this.state.product_valid_date;
            let rec_dates = '';
            let recdateindex = rec_date.length -1;
            for (let i=0; i < rec_date.length; i++) {
                rec_dates += rec_date[i];
                if( i != recdateindex){
                    rec_dates += ',';
                }
            }
            
            formData.append('userId', value);
            formData.append('ingrediants', this.state.Ingrediants);
            formData.append('post_title', this.state.Dishname);
            formData.append('post_content', this.state.dishDiscription);
            formData.append('sprice', this.state.singLePrice);
            formData.append('fprice', this.state.familyPrice);
            formData.append('ingredients', ingredient_ids);
            formData.append('allergies', allergies_ids);
            formData.append('recurring_schedule', this.state.recurring_schedule);
            formData.append('orderLimit', this.state.orderLimit);
            formData.append('product_valid_days', recrng_days);
            formData.append('singleLimit', this.state.singleLimit);
            formData.append('familyLimit', this.state.familyLimit);
            formData.append('product_valid_date', rec_dates);

            if(avatarSource1 != null){
                formData.append('image', {
                    uri: avatarSource1.uri,
                    name: avatarSource1.fileName,
                    type: avatarSource1.type
                });
            }
            if(avatarSource2 != null){
                formData.append('gallery_images1', {
                    uri: avatarSource2.uri,
                    name: avatarSource2.fileName,
                    type: avatarSource2.type
                });
           }
           if(avatarSource3 != null){
                formData.append('gallery_images2', {
                    uri: avatarSource3.uri,
                    name: avatarSource3.fileName,
                    type: avatarSource1.type
                });
           }
           if(avatarSource4 != null){
                formData.append('gallery_images3', {
                    uri: avatarSource4.uri,
                    name: avatarSource4.fileName,
                    type: avatarSource4.type
                });
           }
           fetch(ADD_DISH_URL,{
             method: 'POST',
             headers: {
                'Content-Type': 'multipart/form-data',
             },
             body: formData
            })
        .then((response) => response.json())
        .then((responseJson) => {
             this.setState({isLoading: 0 })
             if (responseJson.success == 1) { 
                 alert(JSON.stringify(responseJson));
                alert('Dish added successfully');
                this.props.navigation.navigate('MyCocina');
             }
           })
         .catch((error) => {
             console.error(error);
        });
    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    AddDishName() {
        this.setState({
            visible: !this.state.visible
        })
    }

    OnPortions() {
        this.setState({
            visible1: !this.state.visible1
        })
    }

    DishDescription() {
        this.setState({
            visible2: !this.state.visible2
        })
    }

    onIngredients() {
        this.setState({
            visibleIngredients: !this.state.visibleIngredients
        })
       
    }
    onAllergies(){
        this.setState({
            visibleAllergies: !this.state.visibleAllergies
        })
    }
    removeIngredients(id){
        let ingredients = this.state.ingredient_names;
        const fields = [];
         for (let i=0; i < ingredients.length; i++) {
             if(ingredients[i].id != id){
                fields.push({'name': ingredients[i].name, 'id': ingredients[i].id}) 
             }
         }
       this.setState({ingredient_names: fields});
    }
    addIngredients(id, name){
        let ingredients = this.state.ingredient_names;
        let exist = 0;
         for (let i=0; i < ingredients.length; i++){
             if(ingredients[i].id == id){
                exist = 1;
             }
         }
         if(exist == 0){
            const {ingredient_names} = this.state;
            ingredient_names.push({'name': name, 'id': id})
            this.setState({ingredient_names});
         }else{
             alert('Already Added');
         }
          
    }

    removeAllergy(id){
        let allergies = this.state.allergies_names;
        const fields = [];
         for (let i=0; i < allergies.length; i++) {
             if(allergies[i].id != id){
                fields.push({'name': allergies[i].name, 'id': allergies[i].id}) 
             }
         }
       this.setState({allergies_names: fields});
    }
    addAllergy(id, name){
        let allergies = this.state.allergies_names;
        let exist = 0;
         for (let i=0; i < allergies.length; i++){
             if(allergies[i].id == id){
                exist = 1;
             }
         }
         if(exist == 0){
            const {allergies_names} = this.state;
            allergies_names.push({'name': name, 'id': id})
            this.setState({allergies_names});
         }else{
             alert('Already Added');
         }
          
    }

    componentDidMount(){
        this.getIngredients();
        this.getAllergies();
    }
    getIngredients(){
        fetch(INGREDIENTLIST,{
            method: 'GET',
            headers: {
               'Content-Type': 'multipart/form-data',
            },
           })
       .then((response) => response.json())
       .then((responseJson) => {
            if (responseJson.success == 1) { 
               this.setState({ingredientlists: responseJson.data});
            }
          })
        .catch((error) => {
            console.error(error);
       });
    }

    getAllergies(){
        fetch(ALLERGYLIST,{
            method: 'GET',
            headers: {
               'Content-Type': 'multipart/form-data',
            },
           })
       .then((response) => response.json())
       .then((responseJson) => {
            if (responseJson.success == 1) { 
               this.setState({allergieslists: responseJson.data});
            }
          })
        .catch((error) => {
            console.error(error);
       });
    }

    searchIngredients(text){
        if(text == ''){
            this.getIngredients();
        }else{
        var details = {
          'search_value':text
         };
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");
         fetch(SEARCHINGREDIENT, {
            method: 'POST',
            headers: {
            'Content-Type':'application/x-www-form-urlencoded'
            },
            body: formBody
            }).then((response) => response.json())
            .then((responseJson) => {
                 if (responseJson.success == 1) {
                    this.setState({ingredientlists: responseJson.data}); 
                 }
               })
             .catch((error) => {
                 console.error(error);
            });
        }
    }

    searchAllergy(text){
        if(text == ''){
            this.getAllergies();          
        }else{
        var details = {
          'search_value':text
         };
         var formBody = [];
         for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");
         fetch(SEARCHALLERGY, {
            method: 'POST',
            headers: {
            'Content-Type':'application/x-www-form-urlencoded'
            },
            body: formBody
            }).then((response) => response.json())
            .then((responseJson) => {
                 if (responseJson.success == 1) {
                    this.setState({allergieslists: responseJson.data}); 
                 }
               })
             .catch((error) => {
                 console.error(error);
            });
        }
    }
    addnewIngredients(){
        return()=>{
            let textt = this.state.new_ing;
            let ing_names = this.state.ingredient_names;
            let exist = 0;
             for (let i=0; i < ing_names.length; i++){
                 if(ing_names[i].id == textt){
                    exist = 1;
                 }
             }
             if(exist == 0){
            const {ingredient_names, new_ing} = this.state;
            ingredient_names.push({'name': textt, 'id': textt})
            this.setState({ingredient_names, new_ing:''}); 
             }   
             else{
                 alert('Already Added');
             }       
           }

    }

    addNewAllergy(){
        return()=>{
            let textt = this.state.new_allergy;
            let ing_names = this.state.allergies_names;
            let exist = 0;
             for (let i=0; i < ing_names.length; i++){
                 if(ing_names[i].id == textt){
                    exist = 1;
                 }
             }
             if(exist == 0){
            const {allergies_names, new_ing} = this.state;
            allergies_names.push({'name': textt, 'id': textt})
            this.setState({allergies_names, new_allergy:''}); 
             }   
             else{
                 alert('Already Added');
             }       
           }

    }

    render() {
       const {isLoading, ingredientlists, ingredient_names, allergies_names, allergieslists} = this.state
      
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    {/* <View style={{flex:.9,  borderBottomColor: 'lightgrey', borderBottomWidth: 2 }}> */}
                    <View style={{ height: 30, padding: 10, marginLeft: 5 }}>
                        <Text style={{ fontSize: 16, color: '#841314', fontWeight: '500' }}>Dish Photos</Text>
                    </View>
                    <View style={{ height: 35, backgroundColor: 'white', marginLeft: 30, padding: 5 }}>
                        <Text style={{ color: '#b5803b', fontSize: 15 }}>Add up to 4 photos per dish</Text>
                    </View>
                    {/* <View style={{backgroundColor:'red'}}> */}
                    <View style={{ height: 180, backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <TouchableOpacity onPress={() => this.actionCamera('avatarSource1')}>
                            {this.state.avatarSource1 != null ? <Image style={{
                                height: 180, justifyContent: 'center',
                                width: 380,

                            }}
                                resizeMode='stretch'
                                source={this.state.avatarSource1} />
                                : <Image style={{
                                    height: 80, justifyContent: 'center',
                                    width: 80,
                                }} source={require('../../../BottomBarScreens/Assets/CrackImage.png')} />}

                        </TouchableOpacity>
                    </View>



                    <View style={{ height: 80, flexDirection: 'row', top: 10, marginLeft: 15, marginRight: 15 }}>
                        <View style={{ flex: .4, margin: 5, backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.actionCamera('avatarSource2')}>
                                {this.state.avatarSource2 != null ? <Image style={{
                                    height: 70,
                                    width: 120,

                                }}
                                    resizeMode='stretch'
                                    source={this.state.avatarSource2} />
                                    : <Image style={{
                                        height: 50,
                                        width: 50,

                                    }} source={require('../../../BottomBarScreens/Assets/CrackImage.png')} />}

                            </TouchableOpacity>

                        </View>
                        <View style={{ flex: .4, margin: 5, backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.actionCamera('avatarSource3')}>
                                {this.state.avatarSource3 != null ? <Image style={{
                                    height: 70,
                                    width: 120,

                                }} resizeMode='stretch'
                                    source={this.state.avatarSource3} />
                                    : <Image style={{
                                        height: 50,
                                        width: 50,

                                    }} source={require('../../../BottomBarScreens/Assets/CrackImage.png')} />}

                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: .4, margin: 5, backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.actionCamera('avatarSource4')}>
                                {this.state.avatarSource4 != null ? <Image style={{
                                    height: 70,
                                    width: 120,

                                }} resizeMode='stretch'
                                    source={this.state.avatarSource4} />
                                    : <Image style={{
                                        height: 50,
                                        width: 50,

                                    }} source={require('../../../BottomBarScreens/Assets/CrackImage.png')} />}

                            </TouchableOpacity>


                        </View>
                    </View>
                    {/* </View> */}
                    {/* </View> */}

                    <View style={{ height: 70, paddingTop: 10 }}>

                        <View style={{ flexDirection: 'row', top: 10 }}>
                            <View style={{ flex: 1, marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, color: '#841314', fontWeight: '500' }}>Dish Name</Text>
                            </View>
                            <View style={{ flex: .1, marginRight: 5 }}>
                                <TouchableOpacity onPress={() => this.AddDishName()}>
                                    <Image source={require('../../../BottomBarScreens/Assets/AddIcon.png')} resizeMode='contain' style={{ height: 20, width: 20 }}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 40, justifyContent: 'center', marginLeft: 20 }}>
                            {this.state.visible == true ?
                                <Text style={{ fontSize: 16, color: '#b5803b' }}>{this.state.Dishname}</Text> :
                                <TextInput style={{ height: 40 }}
                                    placeholder='add here'
                                    onChangeText= {txt => this.onChangeText('Dishname', txt)}></TextInput>}
                        </View>
                    </View>

                    <View style={{ borderBottomColor: '#F7F9F9', borderBottomWidth: 6, paddingBottom: 20, paddingTop: 5 }}>

                        <View style={{ flexDirection: 'row', top: 10 }}>
                            <View style={{ flex: 1, marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, color: '#841314', fontWeight: '500' }}>Portion(s)</Text>

                            </View>
                            <View style={{ flex: .1, marginRight: 5 }}>
                                <TouchableOpacity onPress={() => this.OnPortions()}>
                                    <Image source={require('../../../BottomBarScreens/Assets/AddIcon.png')} resizeMode='contain' style={{ height: 20, width: 20 }}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {this.state.visible1 == true ?
                            <View style={{ flexDirection: 'row', top: 12 }}>
                                <View style={{ justifyContent: 'center', marginLeft: 20, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, color: '#b5803b' }}>${this.state.singLePrice}</Text>
                                    <Text style={{ fontSize: 16, color: '#841314' }}>/Single</Text>
                                </View>

                                <View style={{ justifyContent: 'center', marginLeft: 20, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, color: '#b5803b' }}>${this.state.familyPrice}</Text>
                                    <Text style={{ fontSize: 16, color: '#841314' }}>/family</Text>
                                </View>
                            </View> :
                            <View style={{ top: 12, margin:20}}>
                             <View style={{ flexDirection: 'row'}}>
                            <Text style={{ flex: .3, fontSize: 16, justifyContent: 'center', }}>Single Price</Text>
                            <TextInput keyboardType = 'numeric' placeholder='add here' style={{ flex: .7, height: 40, marginLeft: 20 }}  onChangeText= {txt => this.onChangeText('singLePrice', txt)}></TextInput>
                            </View>
                            <View style={{ flexDirection: 'row'}}>
                            <Text style={{flex: .3, fontSize: 16, justifyContent: 'center',  }}>Family Price</Text>
                            <TextInput keyboardType = 'numeric' placeholder='add here' style={{flex: .7, height: 40, marginLeft: 20 }}  onChangeText= {txt => this.onChangeText('familyPrice', txt)}></TextInput>
                            
                            </View>
                            </View>
                        }
                    </View>
                    <View style={{ paddingBottom:10, paddingTop: 10 }}>

                        <View style={{ flexDirection: 'row', top: 10 }}>
                            <View style={{ flex: 1, marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, color: '#841314', fontWeight: '500' }}>Dish Description</Text>
                            </View>
                            <View style={{ flex: .1, marginRight: 5 }}>
                                <TouchableOpacity onPress={() => this.DishDescription()}>
                                    <Image source={require('../../../BottomBarScreens/Assets/AddIcon.png')} resizeMode='contain' style={{ height: 20, width: 20 }}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 40, justifyContent: 'center', marginLeft: 20 }}>
                            {this.state.visible2 == true ?
                                <Text style={{ fontSize: 16, color: '#b5803b' }}>{this.state.dishDiscription}</Text> :
                                <TextInput style={{ height: 40 }}
                                    placeholder='add here'
                                    onChangeText= {txt => this.onChangeText('dishDiscription', txt)}></TextInput>}
                        </View>
                    </View>

                    <View style={{ marginTop: 5, marginLeft: 20, marginBottom: 5, flexDirection: 'row' }}>
                        <View style={{ flex: .9 }}>
                            <Text style={{ color: '#841314', fontSize: 15, fontWeight: '500' }}>Ingredients</Text>

                        </View>
                        <View style={{ flex: .1, justifyContent: 'center', marginRight: 5 }}>
                            <TouchableOpacity onPress={() => this.onIngredients()}>
                                <Image source={require('../../../BottomBarScreens/Assets/AddIcon.png')} resizeMode='contain' style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 20}}>
                      
                        {ingredient_names.length > 0 ?
                         ingredient_names.map(item =>{
                            return ( 
                                <TouchableOpacity onPress={() => this.removeIngredients(item.id)} style={{ borderColor: '#b5803b', borderWidth: 1, height: 25, padding:10, alignContent: 'center', marginRight: 5, justifyContent: 'center' }}>
                                <Text style={{ color: '#b5803b', fontSize: 12, textAlign: 'center' }}>
                                {item.name}
                                </Text>
                                </TouchableOpacity>
                            )
                         })
                        : null}
                    </View>
                    {this.state.visibleIngredients == true ?
                        <View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                          <TextInput placeholder='Add new and press enter' style={{ height: 45, fontSize: 20 ,marginLeft:15,marginRight:15}} 
                              onChangeText= {txt => this.onChangeText('new_ing', txt)}   onSubmitEditing= {this.addnewIngredients()} ></TextInput>
                          </View>
                          <View style={{ height: 100, flexDirection: 'row', padding: 20 }}>
                          
                            <View style={{ flex: .1, marginLeft: 10 }}>
                                <Image source={require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/searchicon.png')} style={{ height: 20, width: 20 }}></Image>
                            </View>
                            <View style={{ flex: .9, color: 'green', height: 30, marginLeft: 10, borderBottomColor: 'red', borderBottomWidth: 1 }}>
                                <TextInput placeholder='search ingredients' style={{ height: 40, fontSize: 20 }} 
                                  onChangeText= {txt => this.searchIngredients(txt)} ></TextInput>
                            </View>
                           </View>
                            <View style={{ marginLeft: 50, color:'#000', flex:1, flexDirection:"row", fontSize:30, fontWeight: 700 }}>
                                <Text>Most Used Ingrendients</Text>
                            </View>
                          
                            {ingredientlists.length > 0 ?
            
                             ingredientlists.map(item =>{
                                  return ( 
                                  <View  style={{ flex: 1,flexDirection:"row", marginLeft:50, marginRight:20, padding: 10, fontSize:20, borderBottomColor: '#cecece', borderBottomWidth: 1}}>
                                  <TouchableOpacity onPress={() => this.addIngredients(item.slug, item.name)} >
                                  <Text >{item.name}</Text>
                                  </TouchableOpacity>
                                  </View> )
                                 })
                             
                        
                            : <Text/>}
                            
                        </View>

                        : null }

                  
                    {/* </View> */}

                    <View style={{ marginTop: 5, marginLeft: 20, marginBottom: 5,  marginTop:20, flexDirection: 'row' }}>
                        <View style={{ flex: .9 }}>
                            <Text style={{ color: '#841314', fontSize: 15, fontWeight: '500' }}>Allergies</Text>

                        </View>
                        <View style={{ flex: .1, justifyContent: 'center', marginRight: 5 }}>
                            <TouchableOpacity onPress={() => this.onAllergies()}>
                                <Image source={require('../../../BottomBarScreens/Assets/AddIcon.png')} resizeMode='contain' style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 20}}>
                        {allergies_names.length > 0 ?
                         allergies_names.map(item =>{
                            return ( 
                                <TouchableOpacity onPress={() => this.removeAllergy(item.id)} style={{ borderColor: '#b5803b', borderWidth: 1, height: 25, padding:10, alignContent: 'center', marginRight: 5, justifyContent: 'center' }}>
                                <Text style={{ color: '#b5803b', fontSize: 12, textAlign: 'center' }}>
                                {item.name}
                                </Text>
                                </TouchableOpacity>
                            )
                         })
                        : null}

                    </View>
                    {this.state.visibleAllergies== true ?
                        <View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                          <TextInput placeholder='Add new and press enter' style={{ height: 45, fontSize: 20 ,marginLeft:15,marginRight:15}} 
                              onChangeText= {txt => this.onChangeText('new_allergy', txt)}   onSubmitEditing= {this.addNewAllergy()} ></TextInput>
                          </View>
                          <View style={{ height: 100, top: 10, flexDirection: 'row', padding: 20 }}>
                            <View style={{ flex: .1, marginLeft: 10, top: 10 }}>
                                <Image source={require('../../../../Screens/BottomBarScreens/Assets/AllergyImage/searchicon.png')} style={{ height: 20, width: 20 }}></Image>
                            </View>
                            <View style={{ flex: .9, color: 'green', height: 30, marginLeft: 10, borderBottomColor: 'red', borderBottomWidth: 1 }}>
                                <TextInput placeholder='search allergens' style={{ height: 40, fontSize: 20 }} 
                                  onChangeText= {txt => this.searchAllergy(txt)} ></TextInput>
                            </View>
                           </View>
                            <View style={{ marginLeft: 50, color:'#000', flex:1, flexDirection:"row", fontSize:30, fontWeight: 700 }}>
                                <Text>Most Used Allergies</Text>
                            </View>
                            {allergieslists.length > 0 ?
                               allergieslists.map(item =>{
                                  return ( 
                                  <View  style={{ flex: 1,flexDirection:"row", marginLeft:50, marginRight:20, padding: 10, fontSize:20, borderBottomColor: '#cecece', borderBottomWidth: 1}}>
                                  <TouchableOpacity onPress={() => this.addAllergy(item.slug, item.name)} >
                                  <Text >{item.name}</Text>
                                  </TouchableOpacity>
                                  </View> )
                                 })
                             
                        
                            : <Text/>}
                            
                        </View>

                        : null }
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={() => this.onScheduleDish()}
                            style={{ height: 50, justifyContent: 'center' }} ><Text style={{ color: '#b5803b', textAlign: 'center', fontSize: 15 }}>Schedule</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: .1 }}>
                        <TouchableOpacity onPress={() => this.OnSaveDish()} style={{ backgroundColor: '#b5803b', height: 40, justifyContent: 'center' }} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Save Dish</Text></TouchableOpacity>
                    </View>
                    {isLoading ? <Loader/> : <Text/>}
                </ScrollView>
            </View>

        );
    }
}