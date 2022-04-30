import React,{Component} from 'react'
import {View,TextInput,Text,ScrollView,TouchableOpacity,Image,Alert} from 'react-native';
import Calendar from 'react-native-calendar'
import moment from 'moment'
var today = new Date();
import ToggleSwitch from 'toggle-switch-react-native'
const customStyle = {
  hasEventCircle: {
    backgroundColor: '#b5803b',
    color:'#fff'
  },
}

export default class ScheduleDish extends Component{

    static navigationOptions = ({
        title: 'Schedule Dish',
        headerStyle: {
            backgroundColor: '#841314',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 17,
             width: '70%',
            textAlign: 'center',
            
        },
    });
    constructor(props){
        super(props);
        this.state={
            recurringSwitch: false,
            orderLimit: false,
            recurringDays:[],
            singleLimit:'',
            familyLimit: '',
            selectDays:[]

        }
    }
    
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    saveShedule(){
        const { navigation } = this.props;
        navigation.state.params.refresh({
                recurringSwitch: this.state.recurringSwitch? 1: 0, 
                orderLimit:this.state.orderLimit? 1: 0,
                recurringDays: this.state.recurringDays,
                singleLimit: this.state.singleLimit,
                familyLimit: this.state.familyLimit,
                recurringDays: this.state.selectDays
           })
        navigation.goBack(); 
    }
    onDayPress = (day)=> {
        let datee = moment(day).format('YYYY-MM-DD');
        var found = this.getIndex(datee, this.state.selectDays);
        const{selectDays} = this.state;
        if(found == -1) {
          selectDays.push(datee);
        } else {
          selectDays.pop(datee);
        }
       this.setState({selectDays});
      }
      
      getIndex(value, arr) {
        for(var i = 0; i < arr.length; i++) {
          if(arr[i] === value) {
              return i;
          }
        }
        return -1;
      }
      removeItem(index) {
        const data = this.state.selectDays;
        this.setState({
        selectDays: [...data.slice(0,index), ...data.slice(index+1)]
        });
      }
      
      addRecurringDates(index){     
          const{recurringDays} = this.state;   
         var found = this.getIndex(index, recurringDays);
         if(found == -1) {
            recurringDays.push(index)
         }
         else{
            recurringDays.pop(index)
         }
         this.setState({recurringDays});    
      }
      onToggle(isOn){
                    
      }
      onToggle1(isOn){
                      
      }
 

    render(){
        const {recurringDays}= this.state;
        let DayArray = [{'id': 'sunday', 'name': 'S'}, {'id': 'monday', 'name': 'M'}, {'id': 'tuesday', 'name': 'T'}, {'id': 'wednesday', 'name': 'W'}, {'id': 'thursday', 'name': 'T'}, {'id': 'friday', 'name': 'F'},{'id': 'saturday', 'name': 'S'}]
          return(
            <ScrollView>
            <View style={{flex:1}}>
                <View style={{padding:15,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#841314'}}> Schedule :</Text>
                <Text style={{fontSize:14,color:'#b5803b'}}> Fritata Peppercorn </Text>
                </View>
                <View>
                <Calendar style={{marginLeft:20,marginRight:20}}
                    currentMonth={today}       // Optional date to set the currently displayed month after initialization
                    customStyle={{day: {fontSize: 18, textAlign: 'center',justifyContent:'center',}}} 
                    dayHeadings={['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'] }  
                    pagingEnabled={true}                  
                    scrollEnabled={true}              // False disables swiping. Default: False
                    showScrollIndicator={true}     // False hides event indicators. Default:False
                    today={today}              // Defaults to today
                    weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
                    eventDates={this.state.selectDays}
                    onDateSelect={(date) => this.onDayPress(date)} 
                    customStyle={customStyle}
                   /> 
        </View>
       <View style={{padding:15}}>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#841314'}}> Recurring Schedule</Text>
                   <ToggleSwitch 
                          onColor="grey"
                           fontSize='10'
                           isOn={this.state.recurringSwitch}
                           onToggle={recurringSwitch => {
                               this.setState({ recurringSwitch });
                                this.onToggle(recurringSwitch);
                                        }}
                     />
             </View> 
           <Text style={{fontSize:14,color:'#b5803b',marginTop:5}}> Automatically schedule for certain days of week</Text>
           <View style={{flexDirection:'row', flex:1,marginRight:5}}>
              {DayArray.map(item =>{
                 return(<View style={{flex: .1}}>
                    {recurringDays.indexOf(item.id) > -1 ?
                    <Text style={{backgroundColor:'#b5803b', color:'#fff', borderRadius:15, textAlign:'center', width:30, height:30, paddingTop:5}} onPress={() => this.addRecurringDates(item.id)}>
                     {item.name}
                   </Text> :
                   <Text  style={{textAlign:'center', width:30, height:30, paddingTop:5}}  onPress={() => this.addRecurringDates(item.id)}> 
                   {item.name}
                   </Text>
                   }
      
                </View>
                )
           })}
           </View>
        </View>

    <View style={{padding:15}}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{fontSize:16,fontWeight:'bold',color:'#841314'}}> Set Order Limit</Text>
               <ToggleSwitch 
                      onColor="grey"
                      fontSize='10'
                      isOn={this.state.orderLimit}
                      onToggle={orderLimit => {
                      this.setState({ orderLimit });
                      this.onToggle(orderLimit);
                      }}
                    />
       </View> 
       <Text style={{fontSize:14,color:'#b5803b',marginTop:5}}> Set a limit for how many orders can be placed </Text>
    </View>
    <View style={{flexDirection:"row", flex: 1, margin:15}}>
        <View style={{flex: .1}}>
         <Text>Qty.</Text>
       </View>
      <View style={{flex: .2}}>
         <TextInput style={{ height: 40 }} placeholder='add here' 
       onChangeText= {txt => this.onChangeText('singleLimit', txt)}></TextInput>
    </View>
    <View style={{flex: .2}}>
         <Text>/single</Text>
    </View>
    <View style={{flex: .1}}>
         <Text>Qty.</Text>
    </View>
       <View style={{flex: .2}}>
         <TextInput style={{ height: 40 }} placeholder='add here' 
    onChangeText= {txt => this.onChangeText('familyLimit', txt)}></TextInput>  
    </View>  
    <View style={{flex: .2}}>         
          <Text>/family</Text>
       </View>
    </View>
      <View style={{ }}>
                    <TouchableOpacity  
                    onPress={()=>this.saveShedule()}
                    style={{ backgroundColor: '#b5803b', height: 60, justifyContent: 'center' }} >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Save Schedule</Text></TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        )
    }
}