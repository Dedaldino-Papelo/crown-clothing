import { CartActionsTypes } from "./cart.type";

export const toogleCartHidden = () => ({
    type: CartActionsTypes.TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionsTypes.REMOVE_ITEM,
    payload: item
})

export const removeFromCheckout = item => ({
    type: CartActionsTypes.REMOVE_ITEM_CHECKOUT,
    payload: item
})
