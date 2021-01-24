import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    isLoading: false,
    selectedStats: '',
    selectedType: '',
    results: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function setIsLoading(isLoading) {
        dispatch({
            type: 'SET_LOADING',
            payload: isLoading
        })
    }

    function setResults(results) {
        dispatch({
            type: 'SET_RESULTS',
            payload: results
        })
    }

    function setSelectedStats(selectedStats) {
        dispatch({
            type: 'SET_SELECTED_STATS',
            payload: selectedStats
        })
    }

    function setSelectedType(selectedType) {
        dispatch({
            type: 'SET_SELECTED_TYPE',
            payload: selectedType
        })
    }
    
    return (
    <GlobalContext.Provider value={{
        isLoading: state.isLoading,
        results: state.results,
        setIsLoading,
        setResults,
        selectedStats: state.selectedStats,
        setSelectedStats,
        selectedType: state.selectedType,
        setSelectedType,
    }}>
        {children}
    </GlobalContext.Provider>)
}