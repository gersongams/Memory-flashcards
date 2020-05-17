import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import StyledButton from "./StyledButton";
import {addCard} from "../actions";
import {useNavigation} from "@react-navigation/native";
import Colors from "../constants/Colors";
import StyledInput from "./StyledInput";
import {addCardToDeck} from "../helpers/api";

const AddCard = ({route}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const submitDeckHandler = () => {
    const deckId = route.params.deckId
    const newQuestion = {
      question,
      answer
    }
    dispatch(addCard(deckId, newQuestion))
    navigation.goBack()
    addCardToDeck(deckId, question, answer)
    setQuestion('')
    setAnswer('')
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StyledInput
        placeholder="Question"
        onChangeText={text => setQuestion(text)}
        defaultValue={question}
      />
      <StyledInput
        placeholder="answer"
        onChangeText={text => setAnswer(text)}
        defaultValue={answer}
      />
      <StyledButton disabled={question === '' || answer === ''} onPress={submitDeckHandler}>
        Submit
      </StyledButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  }
})

export default AddCard