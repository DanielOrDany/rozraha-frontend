import React from 'react'
import './Order.module.css'
import delete_icon from '../icons/delete_black_36dp.svg';
import edit_icon from "../icons/edit_black_36dp.svg"

const Order = ({order}) => {
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
            <td><img src={edit_icon}/><img src={delete_icon}/></td>
        </tr>
    );
}

export default Order
