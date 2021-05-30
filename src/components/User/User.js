import React from 'react'
import './User.module.css'

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
        </tr>
    );
}

export default User
