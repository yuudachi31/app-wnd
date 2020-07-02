import React, { useState,useContext,useRef } from "react";
import { View,LayoutAnimation,Platform,Animated,PanResponder, UIManager, FlatList,StyleSheet,Text,Image,ScrollView,TouchableOpacity,Dimensions,AsyncStorage } from "react-native";
import HomeDetail from "../src/components/HomeDetail";
import { StoreContext } from "../src/stores/mestore";
import Header from "../src/components/Header2"

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const BALLWIDTH = 60;
const HomeScreen = ({navigation}) => {
  const [high, sethigh] = useState(0);
  const [num, setnum] = useState(0);
 const {bottleState} = useContext(StoreContext);
  const [bottle, setbottle] = bottleState;
  const WATER_KEY ="WATER_STATE";
  const LOGIN_KEY ="LOGIN_STATE";
  const {heatState,CaoWatState,EgWhState,FfatState} = useContext(StoreContext);
  [heat,setheat]=heatState;
  [CaoWat,setCaoWat]=CaoWatState;
  [EgWh,setEgWh]=EgWhState;
  [Ffat,setFfat]=FfatState;
    React.useEffect(() => {
      async function loadDataAsync() {
        try {
         
          const savedWaterString = await AsyncStorage.getItem(WATER_KEY);
          const waterdata = JSON.parse(savedWaterString);
          setbottle(waterdata);sethigh(waterdata*0.065);
          
          
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
         
     
          
        }
      }
      loadDataAsync();
    }, []);
    const position = useRef(new Animated.ValueXY({ x: 200, y: 400 })).current;
  const panResponder = useRef(
    PanResponder.create({
      // onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        let { moveX, moveY } = gesture;
        position.setValue({
          x: moveX - BALLWIDTH / 2,
          y: moveY - BALLWIDTH / 2,
        });
      },      
      // onPanResponderRelease: (event, gesture) => {},
    })
  ).current;
  const ewLevel =()=>{
    if(EgWh>=500){
      return(
        <View style={{backgroundColor:'#f29b88',height:12, marginLeft:20,width:160}}>
        <View style={styles.subbbb}>
        </View>
        </View>
      )}else{
        return(
          <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:EgWh/500*160}}>
          <View style={styles.subbbb}>
          </View>
          </View>
        )
      }
    }
    const cwLevel =()=>{
      if(CaoWat>=610){
        return(
          <View style={{backgroundColor:'#f29b88',height:12, marginLeft:20,width:160}}>
          <View style={styles.subbbb}>
          </View>
          </View>
        )}else{
          return(
            <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:CaoWat/500*160}}>
            <View style={styles.subbbb}>
            </View>
            </View>
          )
        }
      }
      const ffLevel =()=>{
        if(Ffat>=410){
          return(
            <View style={{backgroundColor:'#f29b88',height:12, marginLeft:20,width:160}}>
            <View style={styles.subbbb}>
            </View>
            </View>
          )}else{
            return(
              <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:Ffat/500*160}}>
              <View style={styles.subbbb}>
              </View>
              </View>
            )
          }
        }
  return (
    
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header  navigation={navigation}  />
      <ScrollView >
      <View style={styles.topContentStyle}>
        <Text style={styles.textstyle0}>4月25日</Text>
        <Text style={styles.textstyle0}>你已經堅持了20天</Text>
      </View>
      <View style={styles.sectionStyle}>
        <Text style={{fontSize:20,color:'#fff',marginLeft:28} }>每日營養攝取</Text>
      </View>
      <View style={styles.mainContent}>
      <View style={styles.cardContainerStyle}>
      <View>    
        <Text style={styles.textstyle1}>
                 碳水化合物
        </Text>
        {cwLevel()}
        {/* <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:60}}>
        <View style={styles.subbbb}>
        </View>
        </View> */}
        
      </View>
        
      
      <View>    
        <Text style={styles.textstyle1}>
                蛋白質
        </Text>

        {ewLevel()}
        {/* <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:80}}>
        <View style={styles.subbbb}>
        </View>
        </View> */}
        
      </View>
        
     
      <View >    
        <Text style={styles.textstyle1}>
                 脂質
        </Text>
        {ffLevel()}
        {/* <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:30}}>
        <View style={styles.subbbb}>
        </View>
        </View> */}
      </View>
        
      </View>  
      <View style={{height:200,flexDirection:'column-reverse',marginLeft:20,bottom:17,alignItems:'center'}}>
        <Text style={{marginBottom:-8,marginTop:3,color:'#eb8178'}}>{bottle}/2500</Text>
      <View style={{backgroundColor:'#9bd9e8',
    flexDirection:'column-reverse',
    borderTopLeftRadius:5,
borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    height:high,
    width:77}}>
      <Image style={styles.bottle} source={require('../src/img/bottle.png')}/>
      </View>
      <View></View>
      </View>
      <View style={{height:180,width:40,top:35,justifyContent:'space-between',alignItems:'flex-end',bottom:20}}>
      <TouchableOpacity
       onPress={() =>{
         if(bottle>=0&&bottle<=2400){
          ;
           setbottle(bottle+100);
           LayoutAnimation.easeInEaseOut();sethigh((bottle+100)*0.065);console.log(bottle);
           AsyncStorage.setItem(WATER_KEY, JSON.stringify(bottle+100));
          }else if(bottle>2400){
            LayoutAnimation.easeInEaseOut();setbottle(2500);sethigh((2500)*0.065);console.log(bottle);
            AsyncStorage.setItem(WATER_KEY, JSON.stringify(2500));

          }
          else{
            LayoutAnimation.easeInEaseOut();setbottle(0); sethigh(bottle*0.065);console.log(bottle);
           AsyncStorage.setItem(WATER_KEY, JSON.stringify(0));
          };
         
          
      }}
      >
        {/* 0.065的部分之後可設global state */}
<Image style={styles.pdbutton} source={require('../src/icon/plus.png')}/>
</TouchableOpacity>
<TouchableOpacity
       onPress={() =>{
        if(bottle>=100){
          LayoutAnimation.easeInEaseOut();setbottle(bottle-100);sethigh((bottle-100)*0.065);console.log(bottle);
          AsyncStorage.setItem(WATER_KEY, JSON.stringify(bottle-100));
         }else{
          LayoutAnimation.easeInEaseOut(); setbottle(0); sethigh(bottle*0.065);console.log(bottle);
          AsyncStorage.setItem(WATER_KEY, JSON.stringify(0));
         };
         
        }}
      >
<Image style={styles.pdbutton} source={require('../src/icon/decrease.png')}/>
</TouchableOpacity>


      </View>
      </View>
      <View style={styles.midContentStyle}>
        <Text style={styles.textstyle2 }>今日熱量：{heat} kcal</Text>
      </View>
      <View style={styles.sectionStyle}>
        <Text style={{fontSize:20,color:'#fff',marginLeft:28} }>每日任務</Text>
      </View>
      <View style={{marginTop:30}}>
<View style={styles.missoncard}>
  <View style={{width:150}}>
  <Text style={styles.missonText}>連續運動30分鐘</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={styles.missoncard}>
<View style={{width:150}}>
  <Text style={styles.missonText}>睡滿8小時</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={styles.missoncard}>
  <View style={{width:150}}>
  <Text style={styles.missonText}>不喝含糖飲料</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
 
  
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={styles.missoncard}>
  <View style={{width:150}}>
  <Text style={styles.missonText}>不吃垃圾食物</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
 
  
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={{height:100}}></View>
      </View>
      
      <Animated.View
      style={[position.getLayout(), styles.ball]}
      {...panResponder.panHandlers}
    ><TouchableOpacity
    onPress={()=>{
navigation.navigate('snack');
      
    }}
    >
      <Image style={{height:40,width:40} }source={require('../src/img/diary.png')}/>
      </TouchableOpacity>
      </Animated.View>
</ScrollView>
    </View>
    
  );
};

const win = Dimensions.get('window');
const ratio = win.width/13;
const starwidth = win.width/17;
const bottomWidth=win.width/5.3;

const styles=StyleSheet.create({
  cardContainerStyle: {
    width:"60%",
    marginTop:-5,
    backgroundColor:"#fff"
  },
 
  textstyle0:{
    fontSize:30,  
    color:"#fff",
    lineHeight:50,
  },
  subbbb:{
    height:12,
    width:160,
   
    borderColor: '#707070',
    borderWidth: 2,
    
  },
  topContentStyle:{
    height:180,
    width:'100%',
    backgroundColor:"#F69342",
    justifyContent:'center',
    alignItems:'center',
  },
  pdbutton:{
    height:25,
    width:25,
    
  },
  ball: {
    height: BALLWIDTH,
    width: BALLWIDTH,
    borderRadius: BALLWIDTH,
    backgroundColor: "blue",
    position: 'absolute',
    alignItems:'center',
    justifyContent:'center'
  },
  midContentStyle:{
    height:80,
    width:420,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center',
  },
  sectionStyle:{
marginTop:20,
    height:50,
    width:200,
    backgroundColor:"#1f80e0",
    justifyContent:'center',
    
    borderBottomRightRadius:35
  },
  mainContent:{
    marginTop:30,
    display:"flex",
    flexDirection:"row",
    height:250
  },
  textstyle1:{
    fontSize:20,  
    color:"#2e2e2e",
    lineHeight:50,
    marginLeft:20,
  },
  
  textstyle2:{
    fontSize:20,
  },
  water:{
    backgroundColor:'#9bd9e8',
    flexDirection:'column-reverse',
    height:10,
    width:77,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
    
  },
  bottle:{
    height:190,
    width:bottomWidth,
    marginTop:50,
    marginRight:20,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5

  },
  waterSection:{
    width:"40%",
   
  },
  missoncard:{
flexDirection:'row',
height:70,
marginLeft:21,
width:'100%',
alignItems:'center'

  },
  missonText:{
    color:'#2082E0',
    fontSize:18
  },
  star:{
    height:26,
    width:starwidth
  },
  missonComplete:{
    height:ratio,
    width:ratio,
    alignSelf:'flex-end',
    marginRight:45}
});

export default HomeScreen;