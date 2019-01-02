/**
 * Created by Cn on 2018/10/17.
 */
import {
    CHECK_LOGIN,
    SORTING_HAT,
    GET_USERINFO,
    CHANGE_INFO
} from '../actions'

const currentUser = (state = {}, action) => {
    switch (action.type) {
        case CHECK_LOGIN:
            return action.userinfo
        case GET_USERINFO:
            return action.userinfo
        case CHANGE_INFO:
            return action.userinfo
        case SORTING_HAT:
            return {
                ...state,
                college: action.realCollege
            }
        default:
            return state
    }
}

export default currentUser