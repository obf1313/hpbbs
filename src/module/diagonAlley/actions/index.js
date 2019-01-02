/**
 * Created by Cn on 2018/10/17.
 */
export const TO_CART = 'TO_CART';

export const toCart = params => {
    return dispatch => {
                let item = params;
                dispatch({ type: 'TO_CART', item});
    }
}