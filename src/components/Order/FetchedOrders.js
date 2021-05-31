import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { fetchOrders, fetchUsers, fetchBooks } from "../../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { postOrder, getOrdersFinances } from "../../redux/saga"

const FetchedOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.fetchedOrders);
    const users = useSelector((state) => state.users.fetchedUsers);
    const books = useSelector((state) => state.books.fetchedBooks);
    const loading = useSelector((state) => state.app.loading);

    const [showAdd, setShowAdd] = useState(false);
    const [preOrderValue, setPreOrderValue] = useState("");
    const [userId, setUserId] = useState("");
    const [orderValue, setOrderValue] = useState("");
    const [bookId, setBookId] = useState("");
    const [expiredAt, setExpiredAt] = useState("");
    const [returnedAt, setReturnedAt] = useState("");
    const [profit, setProfit] = useState("");

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleSubmitAdd = () => {
        postOrder(preOrderValue, userId, orderValue, bookId, expiredAt, returnedAt).then(() => {
            setShowAdd(false);
            getProfit();
            dispatch(fetchOrders())
        })
    }

    const getProfit = () => {
        getOrdersFinances().then((data) => {
            setProfit(data)
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
        setExpiredAt(Date.parse(e.target.value) + 86400000)
    }

    const returnedAtOnChange = (e) => {
        setReturnedAt(e.target.value)
    }

    const usersOptions = users.map((user) => (
        <option value={user.id}>{user.full_name}</option>
    ))

    const bookOptions = books.map((book) => (
        <option value={book.id}>{book.name}</option>
    ))

    useEffect(() => {
        getProfit();
        dispatch(fetchOrders());
        dispatch(fetchBooks());
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const orderTableData = orders.map((order) => (
        <Order order={order} key={order.id} />
    ));

    return (
        <>
            <Container style={{marginBottom: 15}}>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Button onClick={handleShowAdd} block>
                            Add new order
                        </Button>
                    </Col>
                    <Col><Button variant="light" disabled>Profit: {profit}</Button></Col>
                </Row>
            </Container>
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
                        <th>Options</th>
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
                            <Form.Label>Order Value</Form.Label>
                            <Form.Control onChange={orderValueOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>User</Form.Label>
                            <Form.Control as="select" onChange={userIdOnChange}>
                                {usersOptions}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Book</Form.Label>
                            <Form.Control as="select" onChange={bookIdOnChange}>
                                {bookOptions}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Expired At</Form.Label>
                            <Form.Control type="date" onChange={expiredAtOnChange} />
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
