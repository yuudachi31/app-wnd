import React from 'react';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import { color } from 'react-native-reanimated';
import Header1 from "../components/Header1";
import SecDetail from "../components/SecDetail";


const SecondScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <Header1
     
      />
    
      <SecDetail 
             navigation={navigation}  
       
      />
     
    </View>
  );
};


export default SecondScreen;
