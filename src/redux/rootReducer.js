import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { booksReducer } from "./booksReducer";
import { usersReducer } from "./usersReducer";
import { ordersReducer } from "./ordersReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    app: appReducer,
    users: usersReducer,
    orders: ordersReducer
});
