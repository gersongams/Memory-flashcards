import React, {useReducer} from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Question from "./Question";
import Results from "./Results";
import Colors from "../constants/Colors";

const SCREEN_WIDTH = Dimensions.get('window').width;

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};

const answer = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
};


const initialState = {
  show: screen.QUESTION,
  correct: 0,
  incorrect: 0,
  actualQuestion: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change_screen":
      return {
        ...state,
        show: action.payload.screen
      };
    case "correct_response":
      return {
        ...state,
        correct: state.correct + 1,
      };
    case "incorrect_response":
      return {
        ...state,
        correct: state.incorrect + 1,
      };
    case "move_to_next_question":
      return {
        ...state,
        actualQuestion: state.actualQuestion + 1,
      };
    case "reset_quiz":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const Quiz = ({route}) => {
  const [state, dispatchState] = useReducer(reducer, initialState);

  const dispatch = useDispatch();
  const {title, questions = []} = useSelector(state => {
    return state[route.params.deckId] ? state[route.params.deckId] : {}
  })

  const handleReset = () => {
    dispatchState({
      type: "reset_quiz",
    });
  };

  const handleAnswer = (response, questionNumber) => {
    if (answer.CORRECT === response) {
      dispatchState({
        type: "correct_response"
      });
    }
    if (answer.INCORRECT === response) {
      dispatchState({
        type: "incorrect_response"
      });
    }

    console.log('stateX', state)

    if (questionNumber !== (questions.length - 1)) {
      dispatchState({
        type: "move_to_next_question"
      });
    } else {
      dispatchState({
        type: "change_screen",
        payload: {
          screen: screen.RESULT,
        },
      });
    }

  };

  const toggleQuestion = (screen) => {
    dispatchState({
      type: "change_screen",
      payload: {
        screen,
      },
    });
  };

  return (
    <View
      style={styles.container}
    >
      {
        state.show === screen.RESULT ? (
          <Results
            correct={state.correct}
            questionCount={questions.length}
            handleReset={handleReset}
          />
        ) : (
          <Question
            question={questions[state.actualQuestion]}
            questionNumber={state.actualQuestion}
            handleAnswer={handleAnswer}
            totalPages={questions.length}
            toggleQuestion={toggleQuestion}
            show={state.show}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pageStyle: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH
  },
});

export default Quiz