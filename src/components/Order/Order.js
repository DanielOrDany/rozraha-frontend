import React from 'react'
import './Order.module.css'

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
        </tr>
    );
}

export default Order
