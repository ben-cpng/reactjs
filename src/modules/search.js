export const SEARCH = 'search/SEARCH';

const initialState = {
    isResult: "false"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                isResult: "true"
            }

        default:
            return state
    }
}

export const search = () => {
    return dispatch => {
        dispatch({
            type: SEARCH
        })        
    }
}