import React from "react";
import { StyleSheet, Text, View,Image, Linking } from "react-native";


const Header1 = () => {
  return (
      <View style={styles.headerStyle}>
        
       
        <Text style={styles.textStyle}>Rebirth</Text>
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "#f59342",
    alignItems:'flex-end',
    height: 80,
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
    fontFamily:"sans-serif-medium"
    
  },
  Icon:{
    width:40,
    height:40
    
  }
});

export default Header1;
