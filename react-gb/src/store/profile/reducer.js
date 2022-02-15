import {CHANGE_DONT_DISTURB} from "./actions";

const initialState = {
    status: 'Active',
    dontDisturb: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DONT_DISTURB: {
            return {
                ...state,
                dontDisturb: !state.dontDisturb,
                status: !state.dontDisturb ? 'Don\'t disturb' : 'Active'
            }
        }
        default:
            return state
    }
}
