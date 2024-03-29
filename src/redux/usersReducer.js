import {FETCH_USERS} from './types'

const initialState = {
    fetchedUsers: []
}

export const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {...state, fetchedUsers: action.payload}  
        default: return state
    }
}