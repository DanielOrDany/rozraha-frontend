import React from "react";
import FetchedUsers from "./components/User/FetchedUsers";
import FetchedBooks from "./components/Book/FetchedBooks";
import FetchedOrders from "./components/Order/FetchedOrders";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css"
import Login from "./components/Login/Login";
import Tables from "./components/Tables/Tables";

function App() {
    return (
        <Router>
            <Route  path="/" component={HomePage} exact/>
            <Route path="/tables" component={Tables} />
            <Route path="/tables/books" component={FetchedBooks} />
            <Route path="/tables/orders" component={FetchedOrders} />
            <Route path="/tables/users" component={FetchedUsers}/>
            <Route path="/login" component={Login} exact/>
        </Router>
    );
}

export default App;
//datepicker timestamp
