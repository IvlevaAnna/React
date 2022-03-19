import {FETCH_STATUSES} from "../../utils/constants";
import {GET_HOLIDAYS_FAILURE, GET_HOLIDAYS_REQUEST, GET_HOLIDAYS_SUCCESS} from "./actions";

const initialState = {
    data : [],
    error: null,
    status: FETCH_STATUSES.IDLE
}

export const holidaysReducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_HOLIDAYS_REQUEST: {
            return {
                ...state,
                status: FETCH_STATUSES.REQUEST,
                error: null
            }
        }
        case GET_HOLIDAYS_SUCCESS: {
            return {
                ...state,
                status: FETCH_STATUSES.SUCCESS,
                data: action.payload
            }
        }
        case GET_HOLIDAYS_FAILURE: {
            return {
                ...state,
                status: FETCH_STATUSES.FAILURE,
                error: action.payload
            }
        }
        default:
            return state
    }
}
