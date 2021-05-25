import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { booksReducer } from "./booksReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    app: appReducer,
    users: usersReducer
});
