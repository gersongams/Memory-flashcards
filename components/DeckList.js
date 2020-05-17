import React from 'react';
import {StyleSheet, View} from "react-native";
import DeckCard from "./DeckCard";
import {useNavigation} from '@react-navigation/native';

const DeckList = ({decks}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {
        Object.keys(decks).map(deckId =>
          (
            <DeckCard
              key={deckId}
              deckName={deckId}
              numberOfCards={decks[deckId].questions.length}
              onPress={() => {
                navigation.navigate("DeckDetail", {
                  deckId: deckId,
                })
              }}/>
          ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default DeckList