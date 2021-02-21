import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  isLoading: false,
  results: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setIsLoading(isLoading) {
    dispatch({
      type: "SET_LOADING",
      payload: isLoading,
    });
  }

  function setResults(results) {
    dispatch({
      type: "SET_RESULTS",
      payload: results,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isLoading: state.isLoading,
        results: state.results,
        setIsLoading,
        setResults,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
