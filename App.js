import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";

import store from "./store";
import useCachedResources from './hooks/useCachedResources';
import Constants from "expo-constants";
import StackNavigator from "./navigation/StackNavigator";
import {setLocalNotification} from "./helpers/notification";

const AppStatusBar = ({backgroundColor, ...props}) => (
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const App = () => {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    setLocalNotification();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar/>
          <StackNavigator/>
        </View>
      </Provider>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App
