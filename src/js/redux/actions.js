import { getData } from '../api/apiRequests'

export function fetchCategories() {
    return dispatch => {
        getData().then(selections => dispatch(getCategories(selections.category)))
    }
}


// Action creators
function getCategories(categories) {
    return { type: 'GET_CATEGORIES', categories }
}

export function selectionPriceUpdate({newPrice, id}) {
    return { type: 'SELECTION_PRICE_UPDATE', newPrice, id }
}

export function selectionStateUpdate({active, id}) {
    return { type: 'SELECTION_STATE_UPDATE', active, id }
}

export function eventStateUpdate({active, id}) {
    return { type: 'EVENT_STATE_UPDATE',  active,  id }
}
