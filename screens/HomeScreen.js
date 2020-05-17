import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux'
import {receiveDecks} from "../actions";
import {getDecks} from "../helpers/api";
import {AppLoading} from "expo";
import DeckList from "../components/DeckList";

const HomeScreen = () => {
  const [ready, setReady] = useState(false)
  const decks = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    getDecks()
      .then((allDecks) => {
        return dispatch(receiveDecks(allDecks));
      })
      .then(() => {
        setReady(true);
      });
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          {!ready ? <AppLoading/> : <DeckList decks={decks}/>}
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    paddingTop: 50,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 20
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
