import React from 'react'
import './Book.module.css'
import delete_icon from '../icons/delete_black_36dp.svg';
import edit_icon from "../icons/edit_black_36dp.svg"

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
            <td><img src={edit_icon}/><img src={delete_icon}/></td>
        </tr>
    );
}

export default Book
