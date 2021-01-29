import React from 'react';
import Post from './post/Post'
import useStyles from './Styles';

const Posts = () => {
    const classes = useStyles();
    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;