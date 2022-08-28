
const initial_state = {
    cuurentUSer: null
}

const userReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                cuurentUSer: action.payload
            }
        default:{
            return state
        }
    }
}

export default userReducer