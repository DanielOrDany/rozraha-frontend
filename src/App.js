import React from "react";
import FetchedBooks from "./components/Book/FetchedBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
    return (
        <Router>
            <Route path="/" component={FetchedBooks} exact/>
            <Route  path="/home" component={HomePage} />
        </Router>
    );
}

export default App;
//datepicker timestamp
