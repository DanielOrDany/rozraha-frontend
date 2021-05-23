import {CREATE_POST,REQUEST_BOOKS,SHOW_LOADER,HIDE_LOADER} from './types'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchBooks() {
    return {
        type: REQUEST_BOOKS
    }
}