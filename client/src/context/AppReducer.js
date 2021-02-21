export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_RESULTS":
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
