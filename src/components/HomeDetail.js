import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,Linking} from "react-native";


const HomeDetail = ({ album,navigation })=> {
   return (
      <View style={styles.cardContainerStyle}>
      <View>    
        <Text style={styles.textstyle1}>
                 {album.title}
        </Text>
      </View>
        <View>
               
        </View>
       
      </View>  
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  cardContainerStyle: {
    width:"60%",
    marginTop:12,
    backgroundColor:"#fff"
  },
  cardSectionStyle: {
    backgroundColor: "#fff",
    borderColor: "#CD5C5C",
    height:170,
  },
  imageStyle: {
    height:10,
    width:200,
    display:"flex",
    marginTop:15,
    marginBottom:15,
    marginLeft:15,
  },
  textstyle1:{
    fontSize:18,
    marginLeft:15,
    marginRight:28,
    color:"#2e2e2e",
    
  }
});

export default HomeDetail;
