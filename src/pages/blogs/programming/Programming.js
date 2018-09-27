import React, { Component } from 'react';
import Blog from '../../../components/blog'

class Programming extends Component {
    state = {
        blogs: []
    }
    componentWillMount(){
        const sampleBlog = {title: "First post", path: "/my-first-blog-post", content: "This is my first post"}
        this.setState({blogs:[sampleBlog]})
    }
    render() {
        const {blogs} = this.state
        return (
            <div className="fixed container" >
                {blogs.map(blog=><Blog key={blog.path} blog={blog}/>)}
            </div>
        );
    }
}

export default Programming;