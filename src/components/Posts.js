import React from 'react';
import {connect} from 'react-redux'
import Post from './Post';

// eslint-disable-next-line import/no-anonymous-default-export
const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return <p>No posts here</p>
    }
    return syncPosts.map((post) => <Post post={post} key={post.id} />)
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);