import { takeEvery, put, call } from "redux-saga/effects";
import { showLoader, hideLoader } from "./actions";
import { REQUEST_BOOKS, FETCH_BOOKS, REQUEST_USERS, FETCH_USERS, FETCH_ORDERS } from "./types";

//put() - dispatches events to the store
//takeEvery() - executes on every request with particular type
//call() -
  
export function* sagaWatcher() {
    yield takeEvery(REQUEST_BOOKS, sagaBooksWorker);
    yield takeEvery(REQUEST_USERS, sagaUsersWorker)
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

async function fetchUsers() {
    const response = await fetch("http://localhost:3000/api/v1/users");
    const userData = await response.json();
    const finalData = userData.data;
    return finalData;
}

async function fetchBooks() {
    const response = await fetch("http://localhost:3000/api/v1/books");
    const bookData = await response.json();
    const finalData = bookData.data;
    return finalData;
}

async function fetchOrders() {
    const response = await fetch("http://localhost:3000/api/v1/orders");
    const orderData = await response.json();
    const finalData = orderData.data;
    return finalData;
}
