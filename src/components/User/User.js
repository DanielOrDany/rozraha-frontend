import React from 'react'
import './User.module.css'
import delete_icon from '../icons/delete_black_36dp.svg';
import edit_icon from "../icons/edit_black_36dp.svg"

const User = ({user}) => {
    return (
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
            <td><img src={edit_icon}/><img src={delete_icon}/></td>
        </tr>
    );
}

export default User
