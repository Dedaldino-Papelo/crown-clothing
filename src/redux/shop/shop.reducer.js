import SHOP_DATA from './Shop_Data'

const initial_state = {
    collections: SHOP_DATA
}


export const shop_reducer = (state = initial_state, action) => {
    switch(action.type){
        
        default:
            return state
    }
}