import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { fetchOrders } from "../../redux/actions";
import add_icon from '../icons/add_black_48dp.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postOrder } from "../../redux/saga"

const FetchedOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.fetchedOrders);
    const loading = useSelector((state) => state.app.loading);

    const [showAdd, setShowAdd] = useState(false);
    const [preOrderValue, setPreOrderValue] = useState("");
    const [userId, setUserId] = useState("");
    const [orderValue, setOrderValue] = useState("");
    const [bookId, setBookId] = useState("");
    const [expiredAt, setExpiredAt] = useState("");
    const [returnedAt, setReturnedAt] = useState("");

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleSubmitAdd = () => {
        postOrder(preOrderValue, userId, orderValue, bookId, expiredAt, returnedAt).then(() => {
            setShowAdd(false);
            dispatch(fetchOrders())
        })
    }

    const preOrderValueOnChange = (e) => {
        setPreOrderValue(e.target.value)
    }

    const userIdOnChange = (e) => {
        setUserId(e.target.value)
    }

    const orderValueOnChange = (e) => {
        setOrderValue(e.target.value)
    }

    const bookIdOnChange = (e) => {
        setBookId(e.target.value)
    }

    const expiredAtOnChange = (e) => {
        setExpiredAt(e.target.value)
    }

    const returnedAtOnChange = (e) => {
        setReturnedAt(e.target.value)
    }

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
        <>
            <div onClick={handleShowAdd}>
                <img src={add_icon} />
            </div>
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
            <Modal show={showAdd} onHide={handleCloseAdd} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Pre Order Value</Form.Label>
                            <Form.Control onChange={preOrderValueOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>User Id</Form.Label>
                            <Form.Control onChange={userIdOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Order Value</Form.Label>
                            <Form.Control onChange={orderValueOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Book Id</Form.Label>
                            <Form.Control onChange={bookIdOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Expired At</Form.Label>
                            <Form.Control onChange={expiredAtOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Returned At</Form.Label>
                            <Form.Control onChange={returnedAtOnChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
                    <Button onClick={handleSubmitAdd}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FetchedOrders;
