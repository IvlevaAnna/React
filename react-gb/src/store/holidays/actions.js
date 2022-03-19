import {apiUrl} from "../../utils/constants";

export const GET_HOLIDAYS_REQUEST = 'HOLIDAYS::GET_HOLIDAYS_REQUEST'
export const GET_HOLIDAYS_SUCCESS = 'HOLIDAYS::GET_HOLIDAYS_SUCCESS'
export const GET_HOLIDAYS_FAILURE = 'HOLIDAYS::GET_HOLIDAYS_FAILURE'

export const getHolidaysRequest = () => ({
    type: GET_HOLIDAYS_REQUEST
})

export const getHolidaysSuccess = (data) => ({
    type: GET_HOLIDAYS_SUCCESS,
    payload: data
})

export const getHolidaysFailure = (err) => ({
    type: GET_HOLIDAYS_FAILURE,
    payload: err
})

export const getHoliday = () => async (dispatch) => {
    dispatch(getHolidaysRequest())

    try {
        const response = await fetch(apiUrl)

        if ( !response.ok ) {
            throw new Error(response.status)
        }

        const data = await response.json()
        dispatch(getHolidaysSuccess(data))

    } catch (e) {
        dispatch(getHolidaysFailure(e))
    }

}
