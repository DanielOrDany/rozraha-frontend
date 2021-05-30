import React from "react";
import FetchedBooks from "./components/Book/FetchedBooks";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
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
            {/* add "/tables/orders" and "/tables/users" routes here*/}
            <Route path="/login" component={Login} exact/>
        </Router>
    );
}

export default App;
//datepicker timestamp
