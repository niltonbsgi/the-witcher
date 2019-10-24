const INITIAL_STATE = {
    list: [],
    list_star_ship: [],
    success: false,
    errorMessage: '',
    error : false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'LIST':
            return {
                ...state,
                list: action.payload.data,
                success: true,
                errorMessage: '',
                error: false
            }
        case 'ERROR':
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
