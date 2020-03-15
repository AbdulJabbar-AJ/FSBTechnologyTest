import { getData } from '../api/apiRequests'

// Action creator
function getSelections(selections) {
    return {
        type: 'GET_SELECTIONS',
        selections
    }
}

export default function fetchSelections() {
    return dispatch => {
        getData().then(selections => dispatch(getSelections(selections.category)))
    }
}