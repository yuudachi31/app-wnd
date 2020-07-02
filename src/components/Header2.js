import React,{useContext} from "react";
import { StyleSheet, Text, View,Image, Linking,AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StoreContext } from "../stores/mestore";

const FIRST_STATE_KEY = "FIRST_STATE";
const Header2 = ({ navigation }) => {
  const {loginState}=useContext(StoreContext);
  const [islogin,setislogin]=loginState;
 
  return (
      <View style={styles.headerStyle}>
        
       
        <Text style={styles.textStyle}>Rebirth</Text>
        <TouchableOpacity
        onPress={()=>{
          // navigation.navigate('FirstScreen')
          setislogin(false);
        }}
         >
    <Image style={{height:30, width:30,marginBottom:20,marginRight:22}} source={require('../img/event_note-black-18dp.png')}/>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "#F79341",
    alignItems:'flex-end',
    justifyContent:'space-between',
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.9,
    // Android Only
    elevation: 2
  
    
  },
  textStyle: {
    fontSize: 20,
    marginLeft:25,
    marginBottom:10,
    color:"#ffffff",
    fontFamily:"sans-serif-medium",
    marginBottom:20
    
  },
  Icon:{
    width:40,
    height:40
    
  }
});

export default Header2;
