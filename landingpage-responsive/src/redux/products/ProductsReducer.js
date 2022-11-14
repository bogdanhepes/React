const initialState = [];
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
