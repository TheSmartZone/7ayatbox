const intialState = {
  counter: 0,
  cartItems: [],
  user: {},
  cardReservation: {}
};

const reducer = (state = intialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      counter: 0,
      cartItems: []
    };
  } else if (action.type === "SAVE") {
    var array = state.cartItems;
    array.push(action.value);
    return {
      ...state,
      cartItems: array
    };
  } else if (action.type === "loggedIn") {
    return {
      ...state,
      user: action.value
    };
  } else if (action.type === "cardReservation") {
    return {
      ...state,
      cardReservation: action.value
    };
  }
  return state;
};
export default reducer;
