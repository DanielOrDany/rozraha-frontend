import { CREATE_POST, REQUEST_BOOKS, SHOW_LOADER, HIDE_LOADER,REQUEST_USERS, REQUEST_ORDERS } from "./types";

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}
export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}

export function fetchBooks() {
    return {
        type: REQUEST_BOOKS,
    };
}

export function fetchUsers() {
    return {
        type: REQUEST_USERS,
    };
}

export function fetchOrders() {
    return {
        type: REQUEST_ORDERS,
    };
}

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    };
}