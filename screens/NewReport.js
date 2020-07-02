import React from "react";
import { View, FlatList,StyleSheet,ScrollView, Text,Image,Dimensions } from "react-native";
import HomeDetail from "../src/components/HomeDetail";
const win = Dimensions.get('window');
import Header from "../src/components/Header3"
const NewReport = ({navigation}) => {
  return (
  <View>
      <Header/>
      <View style={{alignItems:'center'}}>
<Text style={{fontSize:28,marginTop:30,color:'#F79341'}}>昨日好友排行榜</Text>
</View>
<View style={{width:win.width,marginTop:15}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Image style={{height:95,width:90}}source={require('../src/image/peter.jpg')}/>
<View style={{alignItems:'center',justifyContent:'center',width:win.width-90,backgroundColor:'#FACBA4'}}>
<Text style={{fontSize:22}}>完成任務星星數 20 顆</Text>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Image style={{height:95,width:90}}source={require('../src/image/iiiha.png')}/>
<View style={{alignItems:'center',justifyContent:'center',width:win.width-90,backgroundColor:'#FACBA4'}}>
<Text style={{fontSize:22}}>完成任務星星數 15 顆</Text>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Image style={{height:95,width:90}}source={require('../src/image/Koreanfish.jpg')}/>
<View style={{alignItems:'center',justifyContent:'center',width:win.width-90,backgroundColor:'#FACBA4'}}>
<Text style={{fontSize:22}}>完成任務星星數 13 顆</Text>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Image style={{height:95,width:90}}source={require('../src/image/andy.png')}/>
<View style={{alignItems:'center',justifyContent:'center',width:win.width-90,backgroundColor:'#FACBA4'}}>
<Text style={{fontSize:22}}>完成任務星星數 8 顆</Text>
</View>
</View>



</View>
   </View>
   
   
  );
};

const styles=StyleSheet.create({
 
});

export default NewReport;