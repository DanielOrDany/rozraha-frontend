import { takeEvery, put, call } from "redux-saga/effects";
import { showLoader, hideLoader } from "./actions";
import { REQUEST_POSTS, FETCH_POSTS } from "./types";

//put() - dispatches events to the store
//takeEvery() - executes on every request with particular type
//call() -

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({ type: FETCH_POSTS, payload });
        yield put(hideLoader());
    } catch (error) {
        console.log(error)
    }
}

async function fetchPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return await response.json();
}
