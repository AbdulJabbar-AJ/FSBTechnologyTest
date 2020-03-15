const initState = {
    selections: []
}

const roorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_SELECTIONS':
            return {
                ...state,
                selections: action.selections
            }
        default:
            return state
    }
}

export default roorReducer
