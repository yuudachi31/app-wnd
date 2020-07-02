import React,{useContext} from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import MainTabNavigation from './navigations/maintab';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import LoginScreen from './screens/loginScreen';
import SignInScreen from './screens/SignInScreen';
import DiaryScreen from './screens/DiaryScreen'
import breakfast from './screens/breakfast'
import lunch from './screens/lunch';
import dinner from './screens/dinner';
import snack from './screens/snack';
import SetScreen from './screens/SetScreen';
import { StoreProvider } from "./src/stores/mestore"
import * as firebase from "firebase";
import { StoreContext } from "./src/stores/mestore";

const Stack = createStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";

const FIRST_STATE_KEY = "FIRST_STATE";
const WATER_KEY ="WATER_STATE";
const LOGIN_KEY ="LOGIN_STATE";
const App = () => {
  const {LoadingCompleteState,NavigationState,loginState,waterState, bottleState}=useContext(StoreContext);
  const [isLoadingComplete, setLoadingComplete]=LoadingCompleteState;
  const [islogin,setislogin]=loginState;
  const [bottle, setbottle]=bottleState;
  const [water, setwater]= waterState;
  const [initialNavigationState, setInitialNavigationState]=NavigationState;
  React.useEffect(() => {
 
    setbottle(0);
    setwater(0);
    AsyncStorage.setItem(WATER_KEY, JSON.stringify(0));
    console.log(111);
  }
,[islogin])
  React.useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyDO4ZsSfUkLB_POZg90_fXw-vdKeDoOQ5k",
      authDomain: "rebirth-d627c.firebaseapp.com",
      databaseURL: "https://rebirth-d627c.firebaseio.com",
      projectId: "rebirth-d627c",
      storageBucket: "rebirth-d627c.appspot.com",
      messagingSenderId: "397261716975",
      appId: "1:397261716975:web:002b7a931e9207014e4a1a",
      measurementId: "G-7GCYYHNH3X"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
   
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
        const savedloginString = await AsyncStorage.getItem(LOGIN_KEY);
          const logindata = JSON.parse(savedloginString);
          setislogin(logindata);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
        
      }
    }
    loadResourcesAndDataAsync();
  }, []);


  
  if (!isLoadingComplete) {
    return null;
  } else {
if(!islogin){
  return (
<NavigationContainer
          
          onStateChange={(state) =>{
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
          }
          }
        >
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="FirstScreen" component={FirstScreen} />
        <Stack.Screen options={{headerShown: false}} name="SecondScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen} />
        <Stack.Screen options={{headerShown: false}} name="SetScreen" component={SetScreen} />
        </Stack.Navigator>
    </NavigationContainer>

);
}else if(islogin){

    return (
        <NavigationContainer
          initialState={initialNavigationState}
          onStateChange={(state) =>{
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
            
            
          }
          }
        >
      <Stack.Navigator>
        
        <Stack.Screen options={{headerShown: false}} name="ThirdScreen" component={MainTabNavigation} />      
      
        <Stack.Screen options={{headerShown: false}} name="diary" component={DiaryScreen} />
        <Stack.Screen  options={{headerShown: false}} name="breakfast" component={breakfast} />   
        <Stack.Screen  options={{headerShown: false}} name="lunch" component={lunch} />  
        <Stack.Screen  options={{headerShown: false}} name="dinner" component={dinner} />
        <Stack.Screen  options={{headerShown: false}} name="snack" component={snack} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
}

export default  () => {
  return (
   <StoreProvider>
     <App />
   </StoreProvider>
  )};

