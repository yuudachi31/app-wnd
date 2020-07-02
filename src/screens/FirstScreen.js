import React from "react";
import { View, FlatList } from "react-native";
import Header1 from "../components/Header1";
import FirstDetail from "../components/FirstDetail";


const FirstScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <Header1
      
      />
    
      <FirstDetail 
             navigation={navigation}  
       
      />
     
    </View>
  );
};

export default FirstScreen;
