import React from 'react';
import {StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import StyledButton from "./StyledButton";
import {useNavigation} from "@react-navigation/native";
import {deleteDeck} from "../actions";
import Colors from "../constants/Colors";
import StyledText from "./StyledText";
import {removeDeck} from "../helpers/api";

const DeckDetail = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {title, questions = []} = useSelector(state => {
    return state[route.params.deckId] ? state[route.params.deckId] : {}
  })

  const handleDeleteDeck = () => {
    dispatch(deleteDeck(route.params.deckId));
    removeDeck(route.params.deckId);
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>
        {title}
      </StyledText>
      <StyledText style={styles.textColor}>
        {questions.length} cards
      </StyledText>
      <StyledButton
        ghost
        onPress={() => {
          navigation.navigate("AddCard", {
            deckId: route.params.deckId
          })
        }}
      >
        Add Card
      </StyledButton>
      <StyledButton
        onPress={() => {
          if (questions.length <= 0) {
            navigation.navigate("NoCards")
          } else {
            navigation.navigate("Quiz", {
              deckId: route.params.deckId
            })
          }
        }}
      >
        Start Quiz
      </StyledButton>
      <StyledButton textButton textStyle={{color: 'red'}} onPress={handleDeleteDeck}>
        Delete deck
      </StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  title: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textColor: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 36
  }
})

export default DeckDetail