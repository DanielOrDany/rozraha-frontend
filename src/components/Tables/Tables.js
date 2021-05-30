import React from "react";
import { Link,useRouteMatch } from "react-router-dom";
import "./Tables.css"

const Tables = () => {
    const { path, url } = useRouteMatch();
    return (
        <>
            <ul className="table-links">
                <Link to={`${url}/books`} exact >
                    <li>Books</li>
                </Link>
                <Link to={`${url}/orders`} exact >
                    <li>Orders</li>
                </Link>
                <Link to={`${url}/users`} exact >
                    <li>Users</li>
                </Link>
            </ul>
        </>
    );
};

export default Tables;

