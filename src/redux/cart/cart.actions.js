import { CartActionsTypes } from "./cart.type";

export const toogleCartHidden = () => ({
    type: CartActionsTypes.TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
})
