import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directory_reducer } from "./directory/directory.reducer";
import { shop_reducer } from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directory_reducer,
    shop: shop_reducer
})

export default persistReducer(persistConfig, rootReducer)