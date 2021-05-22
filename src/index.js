import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './redux/saga'
import { rootReducer } from "./redux/rootReducer";

const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk,saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <React.StrictMode>{app}</React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
