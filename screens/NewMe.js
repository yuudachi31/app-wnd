import React, { useState, useEffect,useContext } from "react";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { StoreContext } from "../src/stores/mestore";
import { TouchableOpacity,Dimensions,Image } from "react-native";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
  ScrollView
} from "react-native";
import { Button, Text } from "react-native-elements";
import axios from "axios";
import Header1 from "../src/components/Header3"
import Input from "../src/components/Input3";
import { color } from "react-native-reanimated";


const HEIGHT_KEY ="HEIGHT_STATE";
const WEIGHT_KEY ="WEIGHT_STATE";
const FAT_KEY ="FAT_STATE";
const LOGIN_KEY ="LOGIN_STATE";
  const win = Dimensions.get('window');
const msgWidth = win.width/1.3;


// Make a component
const SetScreen = () => {
    const {loginState,FatState,WeightState,HEIGHTState}=useContext(StoreContext);
  const [islogin,setislogin]=loginState;
  const [HEIGHT,setHEIGHT]=HEIGHTState;
  const [Weight,setWeight]=WeightState;
  const [Fat,setFat]=FatState;

  const [loading, setLoading] = useState(false);
  
   
      


//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//   } catch (err2) {


  
  

const GotStorage =async()=>{
  const savedHEIGHTString = await AsyncStorage.getItem(HEIGHT_KEY);
  const HEIGHTdata = JSON.parse(savedHEIGHTString);
  setHEIGHT(HEIGHTdata);
  const savedWEIGHTString = await AsyncStorage.getItem(WEIGHT_KEY);
  const WEIGHTdata = JSON.parse(savedWEIGHTString);
  setWeight(WEIGHTdata);
  const savedFATString = await AsyncStorage.getItem(FAT_KEY);
  const FATdata = JSON.parse(savedFATString);
  setFat(FATdata);
  
}

 

  useEffect( () => {
    GotStorage(); 

  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setMsg2(`${user.displayName || user.email} is login ...`);
  //     } else {
  //       setMsg2(" ");
  //     }
  //   });
   }, []);

  return (
      <View style={{flex:1}}>
    <Header1/>
    <ScrollView >
      <View style={{alignItems:"center"}}>
<View style={{alignItems:"center",justifyContent:'center',height:100
,backgroundColor:'#F79341',width:win.width}}>
  <Text style={{fontSize:30,color:'#fff'}}>我的資料</Text>
</View>

<View style={{
  flexDirection:'row',alignItems:'center',height:200,width:win.width*0.8,
  borderBottomWidth:2,borderBottomColor:'#707070',justifyContent:'space-between'
}}>
<Image style={{height:120,width:120,borderRadius:60,marginLeft:0}} source={require('../src/image/peter.jpg')}/>
<View style={{marginLeft:30,width:win.width*0.42}}>
<View style={styles.card}>
<Text style={styles.cardText}>身高</Text><Text style={styles.cardText}>{HEIGHT+"cm"}</Text>
</View>
<View style={styles.card}>
<Text style={styles.cardText}>體重</Text><Text style={styles.cardText}>{Weight+"kg"}</Text>
</View>
<View style={styles.card}>
<Text style={styles.cardText}>體指率</Text><Text style={styles.cardText}>{Fat+"%"}</Text>
</View>
<View style={styles.card}>
  <Text style={styles.cardText}>獲得星星</Text><Text style={styles.cardText}>243顆</Text>
</View>

</View>
</View>
<Text style={{color:'#F79341',fontSize:27,marginTop:15}}>每日需要營養</Text>

<View style={{backgroundColor:'#FFB1B1',height:win.width/3.7,width:win.width,marginTop:15,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >熱量</Text>
  <Text style={styles.num}>2500卡</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-around',width:win.width}}>
<View style={{backgroundColor:'#8BCAD9',height:win.width/3.7,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >水</Text>
  <Text style={styles.num}>2500克</Text>
</View>
<View style={{backgroundColor:'#EFE494',height:win.width/3.7,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >碳水化合物</Text>
  <Text style={styles.num}>610克</Text>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-around',width:win.width}}>
<View style={{backgroundColor:'#c7c7c7',height:win.width/3.7,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >蛋白質</Text>
  <Text style={styles.num}>500克</Text>
</View>
<View style={{backgroundColor:'#cb98e3',height:win.width/3.7,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >脂肪</Text>
  <Text style={styles.num}>410克</Text>
</View>
</View>

{/* <View style={{flexDirection:'row',marginTop:0}}>
<Text style={styles.title}>Re</Text><Text style={{color:'#f59342',fontSize:44,fontFamily:"sans-serif-medium",}}>b</Text><Text style={styles.title}>irth</Text>
</View> */}
    
       
</View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
flexDirection:'row',
marginTop:6,
justifyContent:'space-between'
  },
  cardText:{
fontSize:20,
color:'#F79341',
  },
  formStyle: {
   
  },
  bStyle:{
      borderRadius:10
  },
  title:{
    fontSize:44,
    color:'#0B0202',
    fontFamily:"sans-serif-medium",
      },

  texts:{
    fontSize:22,
    color:'#0B0202',
    fontFamily:"sans-serif-medium",
    marginTop:30
      },
      type:{
        fontSize:22,
color:'#FFFFFF'
      },
      num:{
        fontSize:22,
        color:'#FFFFFF'
      }
});

export default SetScreen;
