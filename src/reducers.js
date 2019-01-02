/**
 * Created by Cn on 2018/10/17.
 */
import { combineReducers } from 'redux'
import currentUser from './module/user/reducers'
import plate from './module/bbs/reducers'
import cartList from './module/diagonAlley/reducers'

const rootReducer = combineReducers({
    currentUser,
    plate,
    cartList
})

export default rootReducer