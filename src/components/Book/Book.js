import React from 'react'
import './Book.module.css'

const Book = ({book}) => {
    return (
        <tr id={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.creator}</td>
            <td>{book.genre}</td>
            <td>{book.created_at}</td>
            <td>{book.deleted_at}</td>
            <td>{book.createdAt}</td>
            <td>{book.updatedAt}</td>
        </tr>
    );
}

export default Book
