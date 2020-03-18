const initState = {
    categories: [],
    events: {},
    selections: {}
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, categories: action.categories}

        case 'TRACK_SELECTION':
            return {
                ...state,
                selections: {
                    ...state.selections,
                    [action.id]: { active: action.active, price: action.price }
                }
            }

        case 'EVENT_STATE_UPDATE':
            return { ...state, events: { ...state.events, [action.id]: action.active } }

        case 'SELECTION_PRICE_UPDATE':
        case 'SELECTION_STATE_UPDATE':
            const update = state.selections[action.id]

            if (action.type === 'SELECTION_PRICE_UPDATE') {
                update.price = action.newPrice
            } else {
                update.active = action.active
            }
            return { ...state, selections: { ...state.selections, [action.id]: update } }

        default:
            return state
    }
}

export default rootReducer
