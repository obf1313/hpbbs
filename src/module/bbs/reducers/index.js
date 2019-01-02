import {
    GET_PLATE
} from '../actions'

const plate = (state = [], action) => {
    switch (action.type) {
        case GET_PLATE:
            return action.plateData
        default:
            return state
    }
}

export default plate