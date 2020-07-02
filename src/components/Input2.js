import React from 'react';
import { TextInput,StyleSheet, View, Text, Platform,Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
const win = Dimensions.get('window');

const NewInput = (props) => {

   if (Platform.OS === 'ios') {
      return (
         <View style={styles2.containerStyle}>
         <Input
            {...props}
            autoCorrect={false}
            style={props.style}
         />
         </View>
      );
   }

   return (
     <View style={styles2.containerStyle}>
       <TextInput
         {...props}
         autoCorrect={false}
         style={styles2.inputStyle}
         autoCorrect={false}
       />
     </View>
   );
};

const styles = {
   containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      
      
   }
};

const styles2 = StyleSheet.create({
   containerStyle: {
      marginBottom: 10,
      justifyContent: 'center',
      flexDirection: 'row',
     
     
   },
   inputStyle:{
      backgroundColor:'#F7F7F7',
      height:60,
      borderColor: '#B4B0AD',
      borderWidth:2,
      width:win.width/1.2,
      paddingLeft:10,
      fontSize:18
   }
 });

export default NewInput;
