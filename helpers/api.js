import {AsyncStorage} from "react-native";
import {DATA_STORAGE_KEY, setData} from "./generateData";

export const getDecks = () => {
  return AsyncStorage.getItem(DATA_STORAGE_KEY).then(setData);
};

export const submitDeck = ({deck, key}) => {
  return AsyncStorage.mergeItem(
    DATA_STORAGE_KEY,
    JSON.stringify({
      [key]: deck,
    })
  );
};

export const removeDeck = (key) => {
  return AsyncStorage.getItem(DATA_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
  });
};


export const addCardToDeck = (key, question, answer) => {
  return AsyncStorage.getItem(DATA_STORAGE_KEY).then((result) => {
    let decks = JSON.parse(result)
    decks[key].questions.push({question: question, answer: answer})
    AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify(decks))
  })
};
