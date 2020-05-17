import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Platform} from 'react-native';
import * as Icon from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import HomeScreen from '../screens/HomeScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

const isIOS = Platform.OS === "ios";

const Tab =
  isIOS
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const RouteConfigs = {
  Decks: {
    name: "Decks",
    component: HomeScreen,
    options: {
      tabBarIcon: ({color, size}) => (
        <Icon.Ionicons name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'} size={size} color={color}/>
      ),
      title: "Decks",
    },
  },
  NewDeck: {
    component: NewDeckScreen,
    name: "New deck",
    options: {
      tabBarIcon: ({color, size}) => (
        <Icon.FontAwesome name="plus-square" size={size} color={color}/>
      ),
      title: "New deck",
    },
  },
};


const tabNavigatorConfig = {
  initialRouteName: "Decks",
  navigationOptions: {
    header: null
  },
  defaultNavigationOptions: {
    bounces: true
  },
  tabBarOptions: {
    activeTintColor: "white",
    inactiveTintColor: 'gray',
    style: {
      height: 60,
      backgroundColor: '#3700b3',
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
    labelStyle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    tabStyle: {
      marginTop: 5,
      marginBottom: 3
    },
    showIcon: isIOS
  }
};

const TabNav = () => (
  <Tab.Navigator {...tabNavigatorConfig}>
    <Tab.Screen {...RouteConfigs["Decks"]} />
    <Tab.Screen {...RouteConfigs["NewDeck"]} />
  </Tab.Navigator>
);

export default TabNav
