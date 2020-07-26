import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../Action/actionConst'

const initialState = {
    isLoading: false,
    data: {},
    message: null,
    isLogedIn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_LOADING:
            return { ...state, isLoading: true, }
        case FETCH_DATA_SUCCESS:
            return { ...state, isLoading: false, data: action.data, message: action.message, isLoggedIn: true }
        case FETCH_DATA_FAILED:
            return { ...state, isLoading: false, message: action.message, isLoggedIn: false }
        default:
            return state;
    }
}
