import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import NewReport from '../screens/NewReport'
import DiaryScreen from '../screens/DiaryScreen'
import meScreen from '../screens/NewMe'
import breakfast from '../screens/breakfast'
import { NavigationContainer } from '@react-navigation/native';

const Tab=createBottomTabNavigator();
const MainTabNavigation =()=>{
  return (
    
    

    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require("../src/img/home_orange.png")
            : require('../src/img/home_black.png');
        } else if (route.name === 'Diary') {
          iconName = focused 
          ? require("../src/img/diary_orange.png")
          : require('../src/img/diary.png');
        }
        else if(route.name === 'Report'){
          iconName = focused 
          ? require("../src/img/emoji_events_focus.png")
          : require('../src/img/emoji_events-24px.png');

        }
        else if(route.name === 'Me'){
          iconName = focused 
          ? require("../src/img/person_orange.png")
          : require('../src/img/person_black.png');

        }
        // You can return any component that you like here!
        return <Image source={iconName} style={{width:30,height:30}} />;
      },
    })}
        
        
        tabBarOptions={{
          activeTintColor: '#F69442',
          inactiveTintColor: '#ACACAC',
          labelStyle: {
            fontSize: 15,
          marginBottom:10
          },
          style:{
            backgroundColor:'#fff',
            height:80,
           
          }
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Report" component={NewReport}/>
            <Tab.Screen name="Diary" component={DiaryScreen}/>
            <Tab.Screen name="Me" component={meScreen}/>
          </Tab.Navigator>
      )
    }




export default MainTabNavigation;