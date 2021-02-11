 const initialState = []
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  
    switch (action.type) {
   
        case "SET_ATTRACTIONS":
            return action.attractions;
        case "ADD_ATTRACTION":
            return state.concat(action.attractions);
        case "CLEAR_ATTRACTIONS":
            return initialState;
        default:
            return state;
    }
}