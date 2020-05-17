import React from 'react';
import {StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import StyledText from "./StyledText";

const NoCards = () => {
  return (
    <View style={styles.container}>
      <StyledText style={{color: Colors.white, fontSize: 24, textAlign: 'center'}}>
        Sorry, you cannot take a quiz because there are no cards in the deck
      </StyledText>
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
  }
})

export default NoCards