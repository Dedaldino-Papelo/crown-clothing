import { UserTypeActions } from "./user.type"

export const setCurrentUser = (user) => ({
    type: UserTypeActions.SET_CURRENT_USER,
    payload: user
})