import { CartActionsTypes } from "./cart.type"

const initial_state = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = initial_state, action) => {
    switch(action.type){
        case CartActionsTypes.TOOGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }

        case CartActionsTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        default:
            return state
    }

}