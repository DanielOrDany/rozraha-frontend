import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { fetchBooks } from "../../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { postBook } from "../../redux/saga"

const FetchedBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.fetchedBooks);
    const loading = useSelector((state) => state.app.loading);
    
    const [showAdd, setShowAdd] = useState(false);
    const [name, setName] = useState(""); 
    const [creator, setCreator] = useState("");
    const [genre, setGenre] = useState("")

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleSubmitAdd = () => {
        postBook(name, creator, genre).then(() => {
            setShowAdd(false);
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

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const bookTableData = books.map((book) => (
        <Book book={book} key={book.id} />
    ));

    return (
        <>
            <Container style={{marginBottom: 15}}>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Button onClick={handleShowAdd} block>
                            Add new book
                        </Button>
                    </Col>
                </Row>
            </Container>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Creator</th>
                        <th>Genre</th>
                        <th>Created At</th>
                        <th>Deleted At</th>
                        <th>createdAt</th>
                        <th>updatedAt</th>
                        <th>Options</th>
                    </tr>
                    {bookTableData}
                </tbody>
            </table>
            <Modal show={showAdd} onHide={handleCloseAdd} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={nameOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Creator</Form.Label>
                            <Form.Control onChange={creatorOnChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control onChange={genreOnChange}/>
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

export default FetchedBooks;
