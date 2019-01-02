/**
 * Created by Cn on 2018/10/17.
 */
import {
    TO_CART,
} from '../actions'
import undoable, { distinctState } from 'redux-undo'

const cartList = (state = [], action) => {
    switch (action.type) {
        case TO_CART:
            return [
                ...state,
                action.item
            ]
        default:
            return state
    }
}

const undoableCartList = undoable(cartList, {
    filter: distinctState()
})

export default undoableCartList