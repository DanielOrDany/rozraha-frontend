import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './Book.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import delete_icon from '../icons/delete_black_36dp.svg';
import edit_icon from "../icons/edit_black_36dp.svg"
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/actions";
import { deleteBook, getBook, editBook } from "../../redux/saga"

const Book = ({book}) => {
    const dispatch = useDispatch();

    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState(""); 
    const [creator, setCreator] = useState("");
    const [genre, setGenre] = useState("")

    const deleteBookById = (bookId) => {
        deleteBook(bookId).then(() => {
            dispatch(fetchBooks())
        })
    }

    const handleShowEdit = (bookId) => {
        getBook(bookId).then((data) => {
            setId(book.id);
            setName(data.name);
            setCreator(data.creator);
            setGenre(data.genre);
            setShowEdit(true)
        })
    };
    const handleCloseEdit = () => setShowEdit(false);
    const handleSubmitEdit = () => {
        editBook(id, name, creator, genre).then(() => {
            setShowEdit(false);
            dispatch(fetchBooks())
        })
    }

    const nameOnChange = (e) => {
        setName(e.target.value);
    }

    const creatorOnChange = (e) => {
        setCreator(e.target.value);
    }

    const genreOnChange = (e) => {
        setGenre(e.target.value);
    }

    return (
        <>
            <tr id={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.creator}</td>
                <td>{book.genre}</td>
                <td>{book.created_at}</td>
                <td>{book.deleted_at}</td>
                <td>{book.createdAt}</td>
                <td>{book.updatedAt}</td>
                <td><img onClick={() => handleShowEdit(book.id)} src={edit_icon}/><img onClick={() => deleteBookById(book.id)} src={delete_icon}/></td>
            </tr>
            <Modal show={showEdit} onHide={handleCloseEdit} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={nameOnChange} value={name}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Creator</Form.Label>
                            <Form.Control onChange={creatorOnChange} value={creator}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control onChange={genreOnChange} value={genre}/>
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

export default Book
