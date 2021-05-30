import {FETCH_ORDERS} from "./types";

const initialState = {
    fetchedOrders: []
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {...state, fetchedOrders: action.payload}
        default: return state
    }
}