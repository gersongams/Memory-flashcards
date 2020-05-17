import {ADD_CARD, ADD_DECK, DELETE_DECK, RECEIVE_DECKS} from "../actions";

const deck = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case DELETE_DECK:
      const newState = {...state};
      newState[action.deckId] = undefined;
      delete newState[action.deckId]
      return {
        ...newState,
      };
    case ADD_CARD:
      const {deckId, card} = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions, card]
        }
      };
    default:
      return state;
  }
};

export default deck;
