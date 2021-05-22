import React from 'react';
import Post from './Post';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({posts}) => {
    if(!posts.length) {
        return <p>No posts here</p>
    }
    return posts.map((post) => <Post post={post} key={post} />)
}