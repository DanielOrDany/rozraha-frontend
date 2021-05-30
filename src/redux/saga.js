import { takeEvery, put, call } from "redux-saga/effects";
import { showLoader, hideLoader } from "./actions";
import { REQUEST_BOOKS, FETCH_BOOKS, REQUEST_USERS, FETCH_USERS, FETCH_ORDERS, REQUEST_ORDERS } from "./types";

//put() - dispatches events to the store
//takeEvery() - executes on every request with particular type
//call() -
  
export function* sagaWatcher() {
    yield takeEvery(REQUEST_BOOKS, sagaBooksWorker);
    yield takeEvery(REQUEST_USERS, sagaUsersWorker);
    yield takeEvery(REQUEST_ORDERS, sagaOrdersWorker)
}

function prepareRequest(method, body) {
    return {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
}

function* sagaUsersWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchUsers);
        yield put({ type: FETCH_USERS, payload });
        yield put(hideLoader());
    } catch (error) {
        console.log(error);
    }
}

function* sagaBooksWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchBooks);
        yield put({ type: FETCH_BOOKS, payload });
        yield put(hideLoader());
    } catch (error) {
        console.log(error);
    }
}

function* sagaOrdersWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchOrders);
        yield put({ type: FETCH_ORDERS, payload });
        yield put(hideLoader());
    } catch (error) {
        console.log(error);
    }
}

// Users

const USERS_ROUTE = "http://localhost:3000/api/v1/users";

async function fetchUsers() {
    const response = await fetch(USERS_ROUTE);
    const userData = await response.json();
    const finalData = userData.data;
    return finalData;
}

export async function postUser(fullName, address, phoneNumber, category) {
    const response = await fetch(
        USERS_ROUTE,
        prepareRequest(
            "POST",
            {
                "full_name": fullName,
                "address": address,
                "phone_number": phoneNumber,
                "category": category
            }
        )
    );
    const userData = await response.json();
    const finalData = userData.data;
    return finalData;
}


export async function getUser(userId) {
    const response = await fetch(USERS_ROUTE + "/" + userId);
    const userData = await response.json();
    const finalData = userData.data;
    return finalData;
}

export async function deleteUser(userId) {
    const response = await fetch(USERS_ROUTE + "/" + userId, {method: "DELETE"});
    const userData = await response.json();
    const finalData = userData.data;
    return finalData;
}

export async function editUser(userId, fullName, address, phoneNumber, category) {
    const response = await fetch(
        USERS_ROUTE + "/" + userId,
        prepareRequest(
            "PUT",
            {
                "full_name": fullName,
                "address": address,
                "phone_number": phoneNumber,
                "category": category
            }
        )
    );
    const userData = await response.json();
    const finalData = userData.data;
    return finalData;
}

// Books

const BOOKS_ROUTE = "http://localhost:3000/api/v1/books";

async function fetchBooks() {
    const response = await fetch(BOOKS_ROUTE);
    const bookData = await response.json();
    const finalData = bookData.data;
    return finalData;
}

export async function postBook(name, creator, genre) {
    const response = await fetch(
        BOOKS_ROUTE,
        prepareRequest(
            "POST",
            {
                "name": name,
                "creator": creator,
                "genre": genre
            }
        )
    );
    const bookData = await response.json();
    const finalData = bookData.data;
    return finalData;
}

export async function getBook(bookId) {
    const response = await fetch(BOOKS_ROUTE + "/" + bookId);
    const bookData = await response.json();
    const finalData = bookData.data;
    return finalData;
}

export async function deleteBook(bookId) {
    const response = await fetch(BOOKS_ROUTE + "/" + bookId, {method: "DELETE"});
    const bookData = await response.json();
    const finalData = bookData.data;
    return finalData;
}

export async function editBook(bookId, name, creator, genre) {
    const response = await fetch(
        BOOKS_ROUTE + "/" + bookId,
        prepareRequest(
            "PUT",
            {
                "name": name,
                "creator": creator,
                "genre": genre
            }
        )
    );
    const bookData = await response.json();
    const finalData = bookData.data;
    return finalData;
}

// Orders

const ORDERS_ROUTE = "http://localhost:3000/api/v1/orders";

async function fetchOrders() {
    const response = await fetch("http://localhost:3000/api/v1/orders");
    const orderData = await response.json();
    const finalData = orderData.data;
    return finalData;
}

export async function postOrder(preOrderValue, userId, orderValue, bookId, expiredAt, returnedAt) {
    const response = await fetch(
        ORDERS_ROUTE,
        prepareRequest(
            "POST",
            {
                "pre_order_value": preOrderValue,
                "user_id": userId,
                "order_value": orderValue,
                "book_id": bookId,
                "expired_at": expiredAt,
                "returned_at": returnedAt
            }
        )
    );
    const orderData = await response.json();
    const finalData = orderData.data;
    return finalData;
}

export async function getOrder(orderId) {
    const response = await fetch(ORDERS_ROUTE + "/" + orderId);
    const orderData = await response.json();
    const finalData = orderData.data;
    return finalData;
}

export async function passBook(bookId) {
    const response = await fetch(ORDERS_ROUTE + "/" + bookId + "/pass");
    const orderData = await response.json();
    const finalData = orderData.data;
    return finalData;
}

export async function getOrdersFinances() {
    const response = await fetch(ORDERS_ROUTE + "/finances/data");
    const orderData = await response.json();
    const finalData = orderData.data;
    return finalData;
}
