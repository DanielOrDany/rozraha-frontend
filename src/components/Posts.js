import React from 'react';
import {connect} from 'react-redux'
import Post from './Book/Book';

// eslint-disable-next-line import/no-anonymous-default-export
const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return <p>No posts here</p>
    }
    return syncPosts.map((post) => <Post post={post} key={post.id} />)
}

const mapStateToProps = (state) => {
    return {
        syncPosts: state.books.posts
    }
}

export default connect(mapStateToProps, null)(Posts);