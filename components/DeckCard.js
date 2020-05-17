import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import StyledText from "./StyledText";

const DeckCard = ({onPress, deckName, numberOfCards}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.textColor}>
        <StyledText style={styles.deckName}>
          {deckName}
        </StyledText>
      </View>
      <View style={styles.textColor}>
        <StyledText style={styles.deckCards}>
          {numberOfCards} cards
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    flex: 1,
    minWidth: 250,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContent: {
    flex: 1,
    alignItems: 'center',
  },
  deckName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deckCards: {
    fontSize: 18,
    color: 'white'
  }
})

export default DeckCard
