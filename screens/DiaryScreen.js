import React ,{useContext} from "react";
import { View,Dimensions, FlatList,StyleSheet,Text,Image,ImageBackground,  AsyncStorage,TouchableOpacity} from "react-native";
import HomeDetail from "../src/components/HomeDetail";
import { StoreContext } from "../src/stores/mestore"
import Header1 from "../src/components/Header1";
import axios from "axios";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
const LOGIN_KEY ="LOGIN_STATE";
const win = Dimensions.get('window');
const DiaryScreen = ({navigation}) => {
  
  const {loginState}=useContext(StoreContext);
  const [islogin,setislogin]=loginState;
  return (
    
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header1 />
    <View style={{height:120,width:'100%',justifyContent:'center',backgroundColor:'#F79242',alignItems:'center'}}>
<Text style={{fontSize:35,fontFamily:'serif',color:'#FFF'}}>Daily Diet</Text>

    </View>
    <TouchableOpacity
    onPress={async ()=>{
       navigation.navigate('breakfast')
      //AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(false));
     //setislogin(false);
    }
  
    }
    >

<View style={styles.tContainer}>
  <Image style={{height:100,width:180}} source={require('../src/img/true-3.png')}/>
<Text style={styles.diet}>早餐</Text>
</View>

</TouchableOpacity>

<TouchableOpacity
    onPress={async ()=>{
       navigation.navigate('lunch')
      //AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(false));
     //setislogin(false);
    }
  
    }
    >

<View style={styles.tContainer}>
  <Image style={{height:115,width:180}} source={require('../src/img/true-1.png')}/>
<Text style={styles.diet}>午餐</Text>
</View>

</TouchableOpacity>
<TouchableOpacity
    onPress={async ()=>{
       navigation.navigate('dinner')
      //AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(false));
     //setislogin(false);
    }
  
    }
    >

<View style={styles.tContainer}>
  <Image style={{height:135,width:180}} source={require('../src/img/true-2.png')}/>
<Text style={styles.diet}>晚餐</Text>
</View>

</TouchableOpacity>

    </View>
  );
};

const styles=StyleSheet.create({
  image: {
  width:'100%',
  height:150,
  flexDirection:'row',
justifyContent:'flex-end',
marginTop:15
  },
  tContainer:{
height:150,
width:win.width,
marginTop:20,

flexDirection:'row',
justifyContent:'space-around',
alignItems:'center'
  },
  diet:{

fontSize:38,
opacity:1
  },
});

export default DiaryScreen;