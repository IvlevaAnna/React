import {FETCH_STATUSES} from "../../utils/constants";

export const loadingSelector = state => state.status === FETCH_STATUSES.REQUEST
export const dataSelector = state => state.data
export const errorSelector = state => state.error
