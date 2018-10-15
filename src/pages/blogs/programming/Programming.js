import React, { Component } from 'react';
import BlogPreview from '../../../components/blogPreview'
import { withContentful } from '../../../contexts/ContentfulContext'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class Programming extends Component {
    state = {
        blogs: []
    }
    async componentDidMount(){
        const blogs = await this.props.contentful.getEntriesByType("blog", 0)
        console.log(blogs)
        this.setState({blogs})

    }
    render() {
        const { blogs } = this.state
        return (
            <div className="container" >
                {blogs.map(blog => <BlogPreview key={blog.path} blog={blog} />)}
                <div style={{textAlign: 'center', padding: '4% 20% 0 20%'}}>
                    <Button style={{margin: '5px'}} disabled={true}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <b style={{marginLeft: '5px'}}>Prev</b>
                    </Button>
                    <Button style={{margin: '5px'}}>
                        <b style={{marginRight: '5px'}}>Next</b>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default withContentful(Programming);