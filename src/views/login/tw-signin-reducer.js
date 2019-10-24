import {
    USER_ACCESS,
    ERROR
} from './tw-signin-action';

const INITIAL_STATE = {
    user: [],
    success: false,
    errorMessage: '',
    error : false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case USER_ACCESS:
            return {
                ...state,
                user: action.payload.data,
                success: true,
                errorMessage: '',
                error: false
            }
        case ERROR:
            return {
                ...state,
                success: false,
                errorMessage: '',
                error: true
            }
        default:
            return state
    }
};
