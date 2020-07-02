import React, { useState, useEffect,useContext } from "react";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { StoreContext } from "../src/stores/mestore";
import { TouchableOpacity,Dimensions,Image,ScrollView } from "react-native";

import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import { Button, Text,Input } from "react-native-elements";
import axios from "axios";
import Header from "../src/components/Header2";
import { TextInput } from "react-native-gesture-handler";
const win = Dimensions.get('window');

const breakfast = ({navigation}) => {
  const [cal,setcal]=useState(0);
  const [cw,setcw]=useState(0);
  const [ew2,setew2]=useState(0);
  const [ff,setff]=useState(0);
  const [msg4,setmsg4]=useState(null);
  const {heatState,CaoWatState,EgWhState,FfatState} = useContext(StoreContext);
  [heat,setheat]=heatState;
  [CaoWat,setCaoWat]=CaoWatState;
  [EgWh,setEgWh]=EgWhState;
  [Ffat,setFfat]=FfatState;
  React.useEffect(()=>{
    setmsg4(null);
    setcal(0);
    setcw(0);
    setew2(0);
    setff(0);
  },[])
  return (
  <View style={{flex:1}}>
     <Header/>
     <ScrollView>
<View style={{width:win.width,height:100,backgroundColor:'#F79341',alignItems:'center',justifyContent:'center'}}>
  <Text style={{fontSize:45,color:'#fff'}}>今日午餐</Text>
</View>
   <View style={{width:win.width,height:400,backgroundColor:'#F8B36F',alignItems:'center',marginTop:5}}>
     <View style={{width:win.width,alignItems:'flex-end'}}>
     <TouchableOpacity
 onPress={()=>{
  setheat(0);
  setCaoWat(0);
  setEgWh(0);
  setFfat(0);
 }}
 >
     <Image style={{height:40,width:40}} source={require('../src/img/add_a_photo-black-18dp.png')}/>
     </TouchableOpacity>
     </View>
   <Image style={{height:350,width:win.width*0.85}} source={require('../src/img/breakfast2.png')}/>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around',width:win.width}}>
<View style={{backgroundColor:'#F79341',height:win.width/4,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >熱量</Text>
  <TextInput style={styles.num}
  autoCorrect={false}
  placeholder="輸入熱量(cal)"
  autoCapitalize="none"
  value={cal}
  onChangeText={(cal) => setcal(cal)}
  style={styles.inputStyle}
  />
</View>
<View style={{backgroundColor:'#F79341',height:win.width/4,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >碳水化合物</Text>
  <TextInput style={styles.num}
  autoCorrect={false}
  placeholder="輸入碳水化合物(g)"
  autoCapitalize="none"
  value={cw}
  onChangeText={(cw) => setcw(cw)}
  style={styles.inputStyle}
  />
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-around',width:win.width}}>
<View style={{backgroundColor:'#F79341',height:win.width/4,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >蛋白質</Text>
  <TextInput style={styles.num}
  autoCorrect={false}
  placeholder="輸入蛋白質(g)"
  autoCapitalize="none"
  value={ew2}
  onChangeText={(ew2) => setew2(ew2)}
  style={styles.inputStyle}
  />
</View>
<View style={{backgroundColor:'#F79341',height:win.width/4,width:win.width*0.495,marginTop:2,alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.type} >脂肪</Text>
  <TextInput style={styles.num}
  autoCorrect={false}
  placeholder="輸入脂肪(g)"
  autoCapitalize="none"
  value={ff}
  onChangeText={(ff) => setff(ff)}
  style={styles.inputStyle}
  />
</View>
</View>
<View style={{width:win.width,alignItems:'center',marginTop:10}}>
<TouchableOpacity
 onPress={()=>{
  const caldata = JSON.parse(cal);
  const cwdata = JSON.parse(cw);
  const ewdata = JSON.parse(ew2);
  const ffdata = JSON.parse(ff);
  setheat((heat+caldata));
  setCaoWat((CaoWat+cwdata));
  setEgWh((EgWh+ewdata));
  setFfat((Ffat+ffdata));
  setmsg4('已傳送');
 }}
>
<View style={{height:60,width:60,borderRadius:30,backgroundColor:'#2279C4',alignItems:'center',justifyContent:'center'}}>
  <Text style={{color:'#fff',fontSize:18}}>傳送</Text>
</View>

</TouchableOpacity>
<View style={{height:60,alignItems:'center',justifyContent:'center'}}>
  <Text style={{color:'red',fontSize:15}}>{msg4}</Text>
</View>
</View>


</ScrollView>
   </View>
   
  );
};

const styles=StyleSheet.create({
  type:{
    fontSize:22,
color:'#FFFFFF'
  },
  num:{
    fontSize:22,
    color:'#FFFFFF'
  },
  inputStyle:{
    
    height:50,
    backgroundColor:'#F8B36F',
    width:120,
    paddingLeft:5,
    fontSize:15
 }
});

export default breakfast;