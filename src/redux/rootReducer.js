import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { booksReducer } from "./booksReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    app: appReducer
})