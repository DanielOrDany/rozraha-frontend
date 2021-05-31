import React from 'react'
import './Order.module.css'
import return_icon from "../icons/keyboard_return_black_36dp.svg"
import { useDispatch } from "react-redux";
import { fetchOrders } from "../../redux/actions";
import { passBook } from "../../redux/saga"

const Order = ({order}) => {
    const dispatch = useDispatch();

    const returnBook = (bookId) => {
        passBook(bookId).then(() => {
            dispatch(fetchOrders());
        })
    }

    return (
        <tr id={order.id}>
            <td>{order.id}</td>
            <td>{order.pre_order_value}</td>
            <td>{order.order_value}</td>
            <td>{order.user_id}</td>
            <td>{order.book_id}</td>
            <td>{order.expired_at}</td>
            <td>{order.returned_at}</td>
            <td>{order.created_at}</td>
            <td>{order.createdAt}</td>
            <td>{order.updatedAt}</td>
            <td><img onClick={() => {returnBook(order.id)}} src={return_icon}/></td>
        </tr>
    );
}

export default Order
