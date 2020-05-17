import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import StyledText from "./StyledText";
import StyledButton from "./StyledButton";

const answer = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
};

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};

const Question = ({question, questionNumber, handleAnswer, totalPages, toggleQuestion, show}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <StyledText style={{fontSize: 14, textAlign: 'right'}}>
          {questionNumber + 1} / {totalPages}
        </StyledText>
      </View>
      <View style={{marginTop: 80}}>
        <StyledText style={{fontSize: 18, textAlign: 'center'}}>
          {show === screen.QUESTION ? 'Question' : 'Answer'}
        </StyledText>
        <View>
          <StyledText style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>
            {show === screen.QUESTION
              ? question.question
              : question.answer}
          </StyledText>
        </View>
      </View>
      <StyledButton
        textButton
        textStyle={{color: 'red'}}
        onPress={() => {
          if (show === screen.QUESTION) {
            toggleQuestion(screen.ANSWER)
          } else {
            toggleQuestion(screen.QUESTION)
          }
        }}
      >
        Show {show !== screen.QUESTION ? 'Question' : 'Answer'}
      </StyledButton>
      <View style={{marginTop: 50}}>
        <StyledButton
          onPress={() => handleAnswer(answer.CORRECT, questionNumber)}
        >
          Correct
        </StyledButton>
        <StyledButton
          style={{backgroundColor: 'red', borderColor: 'white'}}
          onPress={() => handleAnswer(answer.INCORRECT, questionNumber)}
        >
          Incorrect
        </StyledButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  }
})

export default Question