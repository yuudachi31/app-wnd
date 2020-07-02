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
import Input from "../src/components/Input2";

// const ANDROID_CLIENT_ID =
//   "832044128799-7igvvesric35jcavh8afph1ni709d9bl.apps.googleusercontent.com";
// const IOS_CLIENT_ID =
//   "832044128799-ksgfd6t049fugucoip47k9obm3cqfb5r.apps.googleusercontent.com";

const LOGIN_KEY ="LOGIN_STATE";
  const win = Dimensions.get('window');
const msgWidth = win.width/1.3;


// Make a component
const SignInScreen =  ({ navigation }) => {
    const {loginState}=useContext(StoreContext);
  const [islogin,setislogin]=loginState;
  const [Id,setId]=useState(null)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [msg2, setMsg2] = useState("  ");
  const [loading, setLoading] = useState(false);
  
  const SignIn = async () => {
if(Id===null||Id===' '){setMsg2('用戶名不能為空')}
else if(password!=password2)
      {
        setPassword("");
      setPassword2("");
        setMsg2("兩次輸入密碼不同");     
      }
else{
  
    setMsg2(" ");
    setLoading(true);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setMsg2('註冊成功!');
    // setislogin(true);
     navigation.navigate('SetScreen');
     
     AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(false));
    } catch (err1) {
      console.log(err1.message)
      if(err1.message==='The email address is badly formatted.'){
      setMsg2("電子信箱格式錯誤!");
      setEmail("");}
    
      else if(err1.message==='The email address is already in use by another account.'){
        setMsg2("電子信箱已被使用!");
      setEmail("");}
      else if(err1.message==='createUserWithEmailAndPassword failed: First argument "email" must be a valid string.'){
        setMsg2("信箱格式錯誤");
      setEmail("");}
      else if(err1.message==='createUserWithEmailAndPassword failed: Second argument "password" must be a valid string.'){
        setMsg2("密碼不可為空");
      setEmail("");}
      else if(err1.message==='Password should be at least 6 characters')
      {
        setPassword("");
      setPassword2("");
        setMsg2("密碼至少需6碼");
      }
      else if(err1.message==='The password must be 6 characters long or more.')
      {
        setPassword("");
      setPassword2("");
        setMsg2("密碼小於6碼");
      }else if(err1.message==='The password is invalid or the user does not have a password.')
      {
        setMsg2("密碼錯誤!");
        setPassword("");
      setPassword2("");
      //  setMsg(err1.message);
      }
      else {
         console.log(err1.message);
         setMsg2(err1.message);
        //  setMsg2('註冊成功!');
        //  setislogin(true);
      }
    }
  
     finally {
      setLoading(false);
     
      
    }
  };
}

//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//   } catch (err2) {


  
  



  const renderLoginButton = () => {
    if (loading) {
      return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;
    }

    return (
      <View style={{marginTop:30}}>
        <Button
          title="立即註冊"
          buttonStyle={{ height:50,borderRadius:1,backgroundColor: "#F69341",width:win.width/1.2 }}
          containerStyle={{ padding: 5 }}
         titleStyle={{fontSize:21}}
         onPress={SignIn}
        />
      
      </View>
    );
  };

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setMsg2(`${user.displayName || user.email} is login ...`);
  //     } else {
  //       setMsg2(" ");
  //     }
  //   });
  // }, []);

  return (
      <View>
    <Header1/>
    <View style={{alignItems:"center"}}>


<View style={{flexDirection:'row',marginTop:20}}>
<Text style={styles.texts}>註冊Rebirth</Text>
</View>
<View style={{marginTop:40}}>
        <Input
          labelStyle={{ marginTop: 20 }}
          label="ID"
          placeholder="用戶名"
          autoCorrect={false}
          autoCapitalize="none"
          
          value={Id}
          onChangeText={(Id) => setId(Id)}
        />
        <Input
          labelStyle={{ marginTop: 20 }}
          label="Email"
          placeholder="電子信箱"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          labelStyle={{ marginTop: 20 }}
          label="Password"
          placeholder="密碼"
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
         
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Input
          labelStyle={{ marginTop: 20 }}
          label="Password"
          placeholder="再次輸入密碼"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password2}
          onChangeText={(password2) => setPassword2(password2)}
        />
        <View style={{height:90,width:msgWidth,alignItems:"center"}}>
        <Text style={{ fontSize: 16, color: "gray" }}>{msg2}</Text>
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
  texts:{
    fontSize:22,
    color:'#0B0202',
    fontFamily:"sans-serif-medium",
    marginTop:30
      },
});

export default SignInScreen;
