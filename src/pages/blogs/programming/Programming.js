import React, { Component } from 'react';
import Blog from '../../../components/blog'
import { withContentful } from '../../../contexts/ContentfulContext'

class Programming extends Component {
    state = {
        blogs: []
    }
    async componentDidMount(){
        const blogs = await this.props.contentful.getEntriesByType("blog")
        console.log(blogs)
        this.setState({blogs})

    }
    render() {
        const { blogs } = this.state
        return (
            <div className="fixed container" >
                {blogs.map(blog => <Blog key={blog.fields.path} blog={blog} />)}
            </div>
        );
    }
}

export default withContentful(Programming);