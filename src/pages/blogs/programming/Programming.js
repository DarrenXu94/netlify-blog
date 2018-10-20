import React, { Component } from 'react';
import BlogPreview from '../../../components/blogPreview'
import { withContentful } from '../../../contexts/ContentfulContext'
import PaginationButton from '../../../components/paginationButtons'

class Programming extends Component {
    state = {
        blogs: [],
        start: this.props.match.params.start || 0
    }
    async componentDidMount(){
        const blogs = await this.props.contentful.getEntriesByType("blog", this.state.start)
        console.log(blogs)
        this.setState({blogs})

    }
    render() {
        const { blogs } = this.state
        return (
            <div className="container" >
                {blogs.map(blog => <BlogPreview key={blog.path} blog={blog} />)}
                <PaginationButton 
                    currentPage={this.state.start} 
                    pageCount={this.props.contentful.totalProgrammingPosts} 
                />
            </div>
        );
    }
}

export default withContentful(Programming);