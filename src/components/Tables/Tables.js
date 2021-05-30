import React from "react";
import { Link,useRouteMatch } from "react-router-dom";
import "./Tables.css"

const Tables = () => {
    const { url } = useRouteMatch();
    return (
        <>
            <ul className="table-links">
                <Link to={`${url}/books`} exact className="table-link" >
                    <li>Books</li>
                </Link>
                <Link to={`${url}/orders`} exact className="table-link">
                    <li>Orders</li>
                </Link>
                <Link to={`${url}/users`} exact className="table-link">
                    <li>Users</li>
                </Link>
            </ul>
        </>
    );
};

export default Tables;

