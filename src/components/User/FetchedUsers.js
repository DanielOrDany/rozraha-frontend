import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { fetchUsers } from "../../redux/actions";

const FetchedUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.fetchedUsers);
    const loading = useSelector((state) => state.app.loading);

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
    );
};

export default FetchedUsers;
