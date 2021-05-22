import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
    return (
        <div>
            <PostForm />
            <Posts posts={[1,2,3]}/>
            <FetchedPosts posts={[]}/>
        </div>
    );
}

export default App;
//datepicker