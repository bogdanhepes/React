const initialState = { users: [], isLoading: false };
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    case "ADD_USER":
      return { ...state, users: action.payload };
    case "TOGGLE_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
