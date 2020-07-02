 import React,{useContext} from "react";
 import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert} from "react-native";
 import { StoreContext } from "../stores/mestore";


 const Detail = ({ navigation }) => {
  const {loginState}=useContext(StoreContext);
  const [islogin,setislogin]=loginState;
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

<View style={{marginTop:'10%'}}>
  <TouchableOpacity
  style={{marginTop:'5%'}}
  onPress={()=>setislogin(flase)}
  >
<View style={styles.button}><Text style={{fontSize:25,color:'#FFFFFF',fontFamily:"sans-serif-medium",}}>身材很好想保持</Text></View>

  </TouchableOpacity>
  <TouchableOpacity
  style={{marginTop:'5%'}}
  onPress={()=>{setislogin(true);}}
  >
<View style={styles.button}><Text style={{fontSize:25,color:'#FFFFFF',fontFamily:"sans-serif-medium",}}>我想要減肥！</Text></View>

  </TouchableOpacity>
  <TouchableOpacity
  style={{marginTop:'5%'}}
  onPress={()=>navigation.navigate('ThirdScreen')}
  >
<View style={styles.button}><Text style={{fontSize:25,color:'#FFFFFF',fontFamily:"sans-serif-medium",}}>我想長肌肉！</Text></View>

  </TouchableOpacity>
</View>
       </View>
</View>

   )};

 const styles = StyleSheet.create({
  container:{
alignItems:'center',
justifyContent:'center',
height:'90%'
  },
  container2:{
alignItems:'center',
justifyContent:'center',

height:550,

  },
  icon:{
height:133,

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
fontSize:13
  },
  aCont:{
    marginTop:40,
width:140,
  },
  button:{
    height:65,
    width:320,
backgroundColor:'#1f80e0',
borderRadius:25,
alignItems:'center',
justifyContent:'center',
shadowOffset: { width: 0, height: 3 },
shadowOpacity: 0.9,
// Android Only
elevation: 4
  }
 });

 export default Detail;
