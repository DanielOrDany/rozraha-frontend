import React from "react";
import FetchedBooks from "./components/Book/FetchedBooks";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
    return (
        <div>
            <PostForm />
            <Posts posts={[1,2,3]}/>
            <FetchedBooks />
        </div>
    );
}

export default App;
//datepicker timestamp 