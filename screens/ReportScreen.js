import React from "react";
import { View, FlatList,StyleSheet,Text,Image } from "react-native";
import HomeDetail from "../src/components/HomeDetail";
import albumsData from "../json/me.json";
import Header2 from "../src/components/Header2"
const ReportScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header2/>
      <View style={styles.topContentStyle}>
        <Text style={styles.textstyle1}>4月25日</Text>
        <Text style={styles.textstyle1}>你已經堅持了20天</Text>
      </View>
      <View style={styles.midContentStyle}>
        <Text style={styles.textstyle2 }>每日營養攝取</Text>
      </View>
      <View style={styles.mainContent}>
      <FlatList
      data={albumsData.albumList}
      renderItem={({ item }) => 
      <HomeDetail 
      album={item} 
      navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
      <View>
      <Image style={styles.water} source={require('../src/img/water.png')}/>
      </View>
      </View>
      <View style={styles.midContentStyle}>
        <Text style={styles.textstyle2 }>今日熱量：0.0 kcal</Text>
      </View>


    </View>
  );
};

const styles=StyleSheet.create({
 
});

export default ReportScreen;