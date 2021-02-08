/* eslint-disable import/no-anonymous-default-export */
export default (state = { loggedIn: false, currentUser: {} }, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null 
        default:
            return state
    }
}