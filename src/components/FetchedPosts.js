import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from '../redux/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    if (!posts.length) {
        return <button onClick={() => dispatch(fetchPosts())}>Load</button>
    }
    return posts.map((post) => <Post post={post} key={post.id} />)
};
