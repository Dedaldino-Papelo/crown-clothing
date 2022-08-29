import { CartActionsTypes } from "./cart.type"

const initial_state = {
    hidden: true
}

export const cartReducer = (state = initial_state, action) => {
    switch(action.type){
        case CartActionsTypes.TOOGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }

        default:
            return state
    }

}