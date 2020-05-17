import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import StyledText from "./StyledText";
import StyledButton from "./StyledButton";

const Results = ({correct, questionCount, handleReset}) => {
  const percent = ((correct / questionCount) * 100).toFixed(0);
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <StyledText style={{fontSize: 36, textAlign: 'center', marginBottom: 50}}>
          Quiz Complete!
        </StyledText>
        <StyledText style={{fontSize: 24, textAlign: 'center'}}>
          {correct} / {questionCount} correct
        </StyledText>
      </View>
      <View style={{marginBottom: 32}}>
        <StyledText style={{fontSize: 16, textAlign: 'center', marginTop: 20}}>
          Percentage correct
        </StyledText>
        <StyledText style={{fontSize: 24, textAlign: 'center'}}>{percent}%</StyledText>
      </View>
      <View>
        <StyledButton
          onPress={handleReset}
        >
          Restart Quiz
        </StyledButton>
        <StyledButton
          ghost
          onPress={() => {
            handleReset();
            navigation.goBack();
          }}
        >
          Back To Deck
        </StyledButton>
        <StyledButton
          textButton
          textStyle={{color: 'red'}}
          onPress={() => {
            handleReset();
            navigation.navigate('Home');
          }}
        >
          <Text>Home</Text>
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

export default Results