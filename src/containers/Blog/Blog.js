import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    // JavaScript --> API Call to an URL
    componentDidMount() {
        // Call any API / Cause side-effect
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
                this.setState({ posts: response.data })
                // console.log(response.data)
            )
            .catch(err => console.log(err))
    }

    render() {
        return ( <
            div >
            <
            section className = "Posts" >
            <
            Post / >
            <
            Post / >
            <
            Post / >
            <
            /section> <
            section >
            <
            FullPost / >
            <
            /section> <
            section >
            <
            NewPost / >
            <
            /section> <
            /div>
        );
    }
}

export default Blog;