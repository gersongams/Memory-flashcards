import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import {useDispatch} from "react-redux";
import {addDeck} from "../actions";
import {CommonActions, useNavigation} from "@react-navigation/native";
import StyledInput from "../components/StyledInput";
import {submitDeck} from "../helpers/api";
import {clearLocalNotification, setLocalNotification} from "../helpers/notification";

const NewDeckScreen = () => {
  const navigation = useNavigation();
  const [deckName, setDeckName] = useState('');
  const dispatch = useDispatch()

  const submitDeckHandler = () => {
    const newDeck = {
      [deckName]: {
        title: deckName,
        questions: []
      },
    }
    dispatch(addDeck(newDeck))
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {name: 'Home'},
          {
            name: 'DeckDetail',
            params: {deckId: deckName},
          },
        ],
      })
    );
    submitDeck({
      deck: {
        title: deckName,
        questions: []
      },
      key: deckName
    })
    setDeckName('')
    clearLocalNotification().then(setLocalNotification);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.contentContainer}>
        <StyledText style={styles.deckName}>
          What is the title for your new deck?
        </StyledText>
        <StyledInput
          placeholder="Deck nameasd"
          onChangeText={text => setDeckName(text)}
          value={deckName}
        />
        <StyledButton disabled={deckName === ''} onPress={submitDeckHandler}>
          Submit
        </StyledButton>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 50,
    minWidth: '85%'
  },
  deckName: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32
  },
});

export default NewDeckScreen
