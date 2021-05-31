import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { fetchUsers } from "../../redux/actions";
import add_icon from '../icons/add_black_48dp.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postUser } from "../../redux/saga"

const FetchedUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.fetchedUsers);
    const loading = useSelector((state) => state.app.loading);

    const [showAdd, setShowAdd] = useState(false);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [category, setCategory] = useState("");

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleSubmitAdd = () => {
        postUser(fullName, address, phoneNumber, category).then(() => {
            setShowAdd(false);
            dispatch(fetchUsers())
        })
    }

    const fullNameOnChange = (e) => {
        setFullName(e.target.value)
    }

    const addressOnChange = (e) => {
        setAddress(e.target.value)
    }

    const phoneNumberOnChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const categoryOnChange = (e) => {
        setCategory(e.target.value)
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const userTableData = users.map((user) => (
        <User user={user} key={user.id} />
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
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Category</th>
                        <th>Created At</th>
                        <th>Deleted At</th>
                        <th>createdAt</th>
                        <th>updatedAt</th>
                    </tr>
                    {userTableData}
                </tbody>
            </table>
            <Modal show={showAdd} onHide={handleCloseAdd} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={fullNameOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={addressOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={phoneNumberOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control onChange={categoryOnChange}/>
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

export default FetchedUsers;
