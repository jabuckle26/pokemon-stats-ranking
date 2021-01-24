export default (state, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            state.isLoading = action.payload;
            return {
                ...state
            }
        case 'SET_RESULTS':
            state.results = action.payload;
            return {
                ...state
            }
        case 'SET_SELECTED_STATS':
            state.selectedStats = action.payload;
            return {
                ...state
            }
        case 'SET_SELECTED_TYPE':
            console.log('yes in reducer')
            state.selectedType = action.payload;
            return {
                ...state
            }
        default:
            return state;
    }
}