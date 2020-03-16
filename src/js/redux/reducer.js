import utils from '../utils'

const initState = { categories: [] }

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, categories: action.categories}

        case 'SELECTION_PRICE_UPDATE':
        case 'SELECTION_STATE_UPDATE':
        case 'EVENT_STATE_UPDATE':
            const categories = state.categories
            const arr = utils.findLocation(categories, action.id, action.type !== 'EVENT_STATE_UPDATE')

            if (action.type === 'SELECTION_PRICE_UPDATE') {
                categories[arr[0]].subcat[arr[1]].event[arr[2]].selection[arr[3]].price = action.newPrice
            } else  if (action.type === 'SELECTION_STATE_UPDATE') {
                categories[arr[0]].subcat[arr[1]].event[arr[2]].selection[arr[3]].active = action.active
            } else {
                categories[arr[0]].subcat[arr[1]].event[arr[2]].active = action.active
            }

            return { ...state, categories }

        default:
            return state
    }
}

export default rootReducer
