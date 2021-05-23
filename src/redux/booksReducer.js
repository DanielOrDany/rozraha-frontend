import {CREATE_POST,FETCH_BOOKS} from './types'

const initialState = {
    posts: [],
    fetchedBooks: []
}

export const booksReducer = (state = initialState,action) => {
    switch (action.type) {
        case CREATE_POST: 
            return {...state, posts: state.posts.concat([action.payload])}
        case FETCH_BOOKS:
            return {...state, fetchedBooks: action.payload}  
        default: return state
    }
}