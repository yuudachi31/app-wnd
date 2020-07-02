 import React from "react";
 import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert} from "react-native";

					



 const FirstDetail = ({ navigation }) => {
    return (
       <View style={styles.container}>
         <View style={styles.container2}>
<Image
style={styles.icon}
source={require('../icon/Rebirthicon.png')}
/>
<View style={{flexDirection:'row',marginTop:0}}>
<Text style={styles.texts}>Re</Text><Text style={styles.texts,{color:'#f59342',fontSize:44,fontFamily:"sans-serif-medium",}}>b</Text><Text style={styles.texts}>irth</Text>
</View>
<View style={styles.aCont}>
<Text style={styles.article}>還在為身材煩惱嗎？ Rebirth將幫助你一起 重新雕塑身材，下定 決心之後就開始吧！</Text>
</View>
<View style={{marginTop:'15%'}}>
  <TouchableOpacity
  onPress={()=>navigation.navigate('SecondScreen')}
  >
<View style={styles.button}><Text style={{fontSize:25,color:'#FFFFFF',fontFamily:"sans-serif-medium",}}>Get Started</Text></View>

  </TouchableOpacity>
</View>
       </View>
</View>

   )};

 const styles = StyleSheet.create({
  container:{
alignItems:'center',
justifyContent:'center',
height:'100%'
  },
  container2:{
alignItems:'center',
justifyContent:'center',

height:550,

  },
  icon:{
height:133,
marginTop:'-20%',
width:100
  },
  texts:{
fontSize:44,
color:'#0B0202',
fontFamily:"sans-serif-medium",
  },
  article:{
color:'#4E2121',
fontFamily:"sans-serif-medium",
fontSize:15
  },
  aCont:{
    marginTop:40,
width:250,
  },
  button:{
    height:70,
    width:280,
backgroundColor:'#1f80e0',
// #1f80e0  #4e9abf
borderRadius:30,
alignItems:'center',
justifyContent:'center',
shadowOffset: { width: 0, height: 3 },
shadowOpacity: 0.9,
// Android Only
elevation: 4
  }
 });

 export default FirstDetail;
