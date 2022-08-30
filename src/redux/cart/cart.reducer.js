import { CartActionsTypes } from "./cart.type"
import { addItemToCart, removeCheckout } from "./cart.utils"

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
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionsTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => 
                    cartItem.id !== action.payload.id
                )
            }
        case CartActionsTypes.REMOVE_ITEM_CHECKOUT:
            return{
                ...state,
                cartItems: removeCheckout(state.cartItems, action.payload)
            }

        default:
            return state
    }

}