import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './User.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import delete_icon from '../icons/delete_black_36dp.svg';
import edit_icon from "../icons/edit_black_36dp.svg"
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/actions";
import { deleteUser, getUser, editUser } from "../../redux/saga"

const User = ({user}) => {
    const dispatch = useDispatch();

    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [category, setCategory] = useState("");

    const deleteUserById = (userId) => {
        deleteUser(userId).then(() => {
            dispatch(fetchUsers())
        })
    }

    const handleShowEdit = (userId) => {
        getUser(userId).then((data) => {
            setId(user.id);
            setFullName(user.full_name);
            setAddress(user.address);
            setPhoneNumber(user.phone_number);
            setCategory(user.category);
            setShowEdit(true)
        })
    };
    const handleCloseEdit = () => setShowEdit(false);
    const handleSubmitEdit = () => {
        editUser(id, fullName, address, phoneNumber, category).then(() => {
            setShowEdit(false);
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

    return (
        <>
            <tr id={user.id}>
                <td>{user.id}</td>
                <td>{user.full_name}</td>
                <td>{user.address}</td>
                <td>{user.phone_number}</td>
                <td>{user.category}</td>
                <td>{user.created_at}</td>
                <td>{user.deleted_at}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td><img onClick={() => handleShowEdit(user.id)} src={edit_icon}/><img onClick={() => deleteUserById(user.id)} src={delete_icon}/></td>
            </tr>
            <Modal show={showEdit} onHide={handleCloseEdit} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={fullNameOnChange} value={fullName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={addressOnChange} value={address}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={phoneNumberOnChange} value={phoneNumber}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control onChange={categoryOnChange} value={category}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                    <Button onClick={handleSubmitEdit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default User
