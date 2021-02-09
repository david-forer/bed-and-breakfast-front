// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case "SET_MENU":
            return action.menu
        default:
            return state
    }
}