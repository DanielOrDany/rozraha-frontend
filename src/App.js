import React from "react";
import FetchedBooks from "./components/Book/FetchedBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css"

function App() {
    return (
        <Router>
            <Route  path="/" component={HomePage} exact/>
            <Route path="/books" component={FetchedBooks} exact/>
        </Router>
    );
}

export default App;
//datepicker timestamp
