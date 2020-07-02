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
} from "react-native";
import { Button, Text } from "react-native-elements";
import axios from "axios";
import Header1 from "../src/components/Header1"
import Input from "../src/components/Input3";

// const ANDROID_CLIENT_ID =
//   "832044128799-7igvvesric35jcavh8afph1ni709d9bl.apps.googleusercontent.com";
// const IOS_CLIENT_ID =
//   "832044128799-ksgfd6t049fugucoip47k9obm3cqfb5r.apps.googleusercontent.com";
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
 const [h,seth]=useState(null);
 const [w,setw]=useState(null);
 const [f,setf]=useState(null);
  const [msg3, setMsg3] = useState("  ");
  const [loading, setLoading] = useState(false);
  
  const InputInf = async () => {
if(h===null){setMsg3('請輸入身高')}
else{
 if(w===null){setMsg3('請輸入體重')}
 else{
 if(f===null){setMsg3('請輸入體脂率')} 
 else{
   setMsg3(null);
   setHEIGHT(h);
   setWeight(w);
   setFat(f);
   
   AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(true));
   AsyncStorage.setItem(HEIGHT_KEY, JSON.stringify(h));
   AsyncStorage.setItem(WEIGHT_KEY, JSON.stringify(w));
   AsyncStorage.setItem(FAT_KEY, JSON.stringify(f));
   setislogin(true);
  }
 }
}
}   
      


//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//   } catch (err2) {


  
  



  const renderLoginButton = () => {
    if (loading) {
      return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;
    }

    return (
      <View style={{marginTop:0}}>
        <Button
          title="開始"
          buttonStyle={{ height:50,borderRadius:22,backgroundColor: "#3E7CB9",width:win.width*0.5 }}
          containerStyle={{ padding: 5 }}
         titleStyle={{fontSize:21}}
         onPress={InputInf}
        />
      
      </View>
    );
  };

  useEffect(() => {
setf(null);
setw(null);
seth(null);
setMsg3(null);


  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setMsg2(`${user.displayName || user.email} is login ...`);
  //     } else {
  //       setMsg2(" ");
  //     }
  //   });
   }, []);

  return (
      <View>
    <Header1/>
    <View style={{alignItems:"center"}}>



<Image style={{marginTop:win.height/5.8,height:133,width:100}} source={require('../src/icon/Rebirthicon.png')}/>
<View style={{flexDirection:'row',marginTop:0}}>
<Text style={styles.title}>Re</Text><Text style={{color:'#f59342',fontSize:44,fontFamily:"sans-serif-medium",}}>b</Text><Text style={styles.title}>irth</Text>
</View>
<View style={{marginTop:20}}>
        <Input
          labelStyle={{ marginTop: 20 }}
          label="身高"
          placeholder="輸入身高(cm)"
          autoCorrect={false}
          autoCapitalize="none"
          
          value={h}
          onChangeText={(h) => seth(h)}
        />
       
        <Input
          labelStyle={{ marginTop: 20 }}
          label="體重"
          placeholder="輸入體重(kg)"
          autoCorrect={false}
          
          autoCapitalize="none"
         
          value={w}
          onChangeText={(w) => setw(w)}
        />
        <Input
          labelStyle={{ marginTop: 20 }}
          label="體脂"
          placeholder="輸入體脂率(%)"
          
          autoCorrect={false}
          autoCapitalize="none"
          value={f}
          onChangeText={(f) => setf(f)}
        />
        <View style={{height:30,width:msgWidth,alignItems:"center"}}>
        <Text style={{ fontSize: 16, color: "gray" }}>{msg3}</Text>
        </View>
   </View>     
        {renderLoginButton()}
        
        
    
     
      {/* <View style={styles.formStyle}>
        <Button
          title="Sign Out"
          buttonStyle={{ backgroundColor: "gray" }}
          containerStyle={{ padding: 5 }}
          onPress={() => {
            firebase.auth().signOut();
            setMsg("");
          }}
        />
      </View> */}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SetScreen;
