import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { fetchOrders } from "../../redux/actions";

const FetchedOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.fetchedOrders);
    const loading = useSelector((state) => state.app.loading);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const orderTableData = orders.map((order) => (
        <Order order={order} key={order.id} />
    ));

    return (
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Pre Order Value</th>
                    <th>Order Value</th>
                    <th>User Id</th>
                    <th>Book Id</th>
                    <th>Expired At</th>
                    <th>Returned At</th>
                    <th>Created At</th>
                    <th>createdAt</th>
                    <th>updatedAt</th>
                </tr>
                {orderTableData}
            </tbody>
        </table>
    );
};

export default FetchedOrders;
