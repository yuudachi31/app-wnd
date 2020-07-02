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
import Input from "../src/components/Input";

// const ANDROID_CLIENT_ID =
//   "832044128799-7igvvesric35jcavh8afph1ni709d9bl.apps.googleusercontent.com";
// const IOS_CLIENT_ID =
//   "832044128799-ksgfd6t049fugucoip47k9obm3cqfb5r.apps.googleusercontent.com";

const LOGIN_KEY ="LOGIN_STATE";
  const win = Dimensions.get('window');
const msgWidth = win.width/1.3;


// Make a component
const LoginScreen = ({ navigation }) => {
    const {loginState}=useContext(StoreContext);
  const [islogin,setislogin]=loginState;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [msg, setMsg] = useState("  ");
  const [loading, setLoading] = useState(false);
  
  const LogIn = async () => {
    setMsg(" ");
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setislogin(true);
      AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(true));
    } catch (err1) {
      console.log(err1.message)
      if(err1.message==='The email address is badly formatted.'){
      setMsg("電子信箱格式錯誤!");
      }else if(err1.message==='signInWithEmailAndPassword failed: Second argument "password" must be a valid string.')
      {
        setMsg("信箱或密碼錯誤");
      //  setMsg(err1.message);
      }else if(err1.message==='The password is invalid or the user does not have a password.')
      {
        setMsg("密碼錯誤!");
      //  setMsg(err1.message);
      }
      else if(err1.message==='There is no user record corresponding to this identifier. The user may have been deleted.')
      {
        setMsg("找不到此帳號");
      //  setMsg(err1.message);
      }else {
        setMsg(err1.message)
      }
    }
     finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };
 

//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//   } catch (err2) {




  const askFBTokenAndLogin = async () => {
   
    const token = await AsyncStorage.getItem("fb_token");
    if (token) {
        
         // setislogin(true);
          //AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(true));
          navigation.navigate('SetScreen');
      doFBLogin(token);
    } else {
      try {
        await Facebook.initializeAsync("2751115988454812");
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
        if (type === "success") {
          await AsyncStorage.setItem("fb_token", token);
          
        } else {
          // type === 'cancel'
          return;
        }
      } catch ({ message }) {
        setMsg(`Facebook Login Error: ${message}`);
      }
    }
  };

  const doFBLogin = async (token) => {
    const response = await axios.get(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      if (!currentUser.displayName) {
        await currentUser.updateProfile({
          displayName: `Facebook's ${response.data.name}`,
          
        });
        //setislogin(true);
       
      }
    } catch (e) {
      AsyncStorage.removeItem("fb_token");
      return;
    }
  };

  const askGoogleTokenAndLogin = async () => {
    const idToken = await AsyncStorage.getItem("google_idToken");
    const accessToken = await AsyncStorage.getItem("google_accessToken");

    if (idToken) {
      try {
        doGoogleLogin(idToken, accessToken);
      } catch (e) {
        AsyncStorage.removeItem("google_accessToken");
        AsyncStorage.removeItem("google_idToken");
      }
    } else {
      try {
        const { type, accessToken, idToken, user } = await Google.logInAsync({
          androidClientId: ANDROID_CLIENT_ID,
          iosClientId: IOS_CLIENT_ID,
          scopes: ["profile", "email"],
        });
        if (type === "success") {
          await AsyncStorage.setItem("google_idToken", idToken);
          await AsyncStorage.setItem("google_accessToken", accessToken);
          doGoogleLogin(idToken, accessToken, user);
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }
  };

  const doGoogleLogin = async (idToken, accessToken, user) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/userinfo/v2/me?oauth_token=${accessToken}`
      );
    } catch (e) {}

    // Firebase Google Token Login
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken);

    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      if (!currentUser.displayName) {
        await currentUser.updateProfile({
          // displayName: `Google's ${response.data.name}`,
          displayName: `Google's ${user.name}`,
        });
      }
    } catch (e2) {
      AsyncStorage.removeItem("google_accessToken");
      AsyncStorage.removeItem("google_idToken");
      return;
    }
  };

  const renderLoginButton = () => {
    if (loading) {
      return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;
    }

    return (
      <Button
        title="登入"
        buttonStyle={{ borderRadius:10,backgroundColor: "#F69342",width:102 }}
        containerStyle={{ padding: 5 }}
        onPress={LogIn}
      />
    );
  };

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         setMsg(`${user.displayName || user.email} is login ...`);
//       } else {
//         setMsg(" ");
//       }
//     });
//   }, []);

  return (
      <View>
    <Header1/>
    <View style={{alignItems:"center"}}>

<Image style={{marginTop:win.height/5.8,height:133,width:100}} source={require('../src/icon/Rebirthicon.png')}/>
<View style={{flexDirection:'row',marginTop:0}}>
<Text style={styles.texts}>Re</Text><Text style={styles.texts,{color:'#f59342',fontSize:44,fontFamily:"sans-serif-medium",}}>b</Text><Text style={styles.texts}>irth</Text>
</View>
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
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <View style={{alignItems:'flex-end',width:290}}>
        {renderLoginButton()}
        
        
        </View>
        <View style={{height:90,width:msgWidth,alignItems:"center"}}>
        <Text style={{ fontSize: 16, color: "gray" }}>{msg}</Text>
        </View>
      <View style={styles.formStyle}>
        <Button
          title="Facebook 登入"
          buttonStyle={{ borderRadius:10,backgroundColor: "#39579A",width:290 }}
          containerStyle={{ padding: 5 }}
          onPress={askFBTokenAndLogin}
        />
      
      </View>
      <View style={styles.formStyle}>
        <Button
          title="註冊"
          buttonStyle={{ borderRadius:10,backgroundColor: "#CECECE",width:290 }}
          containerStyle={{ padding: 5 }}
          onPress={()=>navigation.navigate('SignInScreen')}
        />
      
      </View>
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
    fontSize:44,
    color:'#0B0202',
    fontFamily:"sans-serif-medium",
      },
});

export default LoginScreen;
