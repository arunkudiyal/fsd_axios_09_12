import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    // JavaScript --> API Call to an URL
    componentDidMount() {
        // Call any API / Cause side-effect
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                    const posts = response.data.slice(0, 8)
                    // Update the API data by adding the value of Author
                    const updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Arun Kudiyal'
                        }
                    })
                    this.setState({ posts: updatedPosts })
                }
                // console.log(response)
            )
            .catch(err => console.log(err))
    }

    selectedPostHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.selectedPostHandler(post.id)} />
        })

        return ( 
            <div >
                <section className = "Posts" >
                    {posts}
                </section> 
                <section >
                    <FullPost id={this.state.selectedPostId} />
                </section> 
                <section >
                    <NewPost / >
                </section> 
            </div >
        );
    }
}

export default Blog;