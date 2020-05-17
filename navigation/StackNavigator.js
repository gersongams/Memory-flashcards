import BottomTabNavigator from "./BottomTabNavigator";
import DeckDetail from "../components/DeckDetail";
import AddCard from "../components/AddCard";
import NoCards from "../components/NoCards";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from 'react';
import Quiz from "../components/Quiz";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const StackNavigatorConfig = {
  headerMode: "screen",
};

const StackConfig = {
  Home: {
    name: "Home",
    component: BottomTabNavigator,
    options: {
      title: "Home",
      headerShown: false
    },
  },
  DeckDetail: {
    name: "DeckDetail",
    component: DeckDetail,
    options: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: Colors.navBarColor,
      },
      headerBackTitleVisible: false,
      elevation: 2,
    },
  },
  AddCard: {
    name: "AddCard",
    component: AddCard,
    options: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: Colors.navBarColor,
      },
      title: 'Add Card',
      headerBackTitleVisible: false,
      elevation: 2,
    },
  },
  NoCards: {
    name: "NoCards",
    component: NoCards,
    options: {
      headerTitle: '',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: Colors.navBarColor,
      },
      headerBackTitleVisible: false,
      elevation: 2,
    }
  },
  Quiz: {
    name: "Quiz",
    component: Quiz,
    options: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: Colors.navBarColor,
      },
      title: 'Quiz',
      headerBackTitleVisible: false,
      elevation: 2,
    },
  },
};

const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator {...StackNavigatorConfig}>
        <Stack.Screen {...StackConfig['Home']}/>
        <Stack.Screen {...StackConfig['DeckDetail']}/>
        <Stack.Screen {...StackConfig['AddCard']}/>
        <Stack.Screen {...StackConfig['NoCards']}/>
        <Stack.Screen {...StackConfig['Quiz']}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator