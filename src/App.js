import React from "react";
import FetchedBooks from "./components/Book/FetchedBooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css"
import Login from "./components/Login/Login";

function App() {
    return (
        <Router>
            <Route  path="/" component={HomePage} exact/>
            <Route path="/books" component={FetchedBooks} exact/>
            <Route path="/login" component={Login} exact/>
        </Router>
    );
}

export default App;
//datepicker timestamp
