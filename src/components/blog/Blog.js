// import React from 'react';
// import Moment from 'react-moment';
// import * as Markdown from 'react-markdown'
// import './blog.css'

// const Blog = ({ blog }) => {
//     return (
//         <div className="card card-body margin10 boxShadow">
//             <h1 className="gothicFont card-title">
//                 {blog.title}
//             </h1>
//             <br />

//             <sup>Updated at <Moment date={new Date(blog.sys.updatedAt)} format="YYYY/MM/DD" /></sup>
//             <Markdown className="card-text padTop cardMaxWidth" source={blog.content} />

//         </div>
//     );
// };

// export default Blog;

import React, { Component } from 'react';
import { withContentful } from '../../contexts/ContentfulContext'
import Moment from 'react-moment';
import * as Markdown from 'react-markdown'

class Blog extends Component {
    state = {
        blog: null
    }

    async componentDidMount() {
        const blog = await this.props.contentful.getBlogById(this.props.match.params.id)
        this.setState({ blog })
    }

    render() {
        let { blog } = this.state
        return (
            <div className="card card-body margin10 boxShadow">
            {blog && 
                <div>
                    <h1 className="gothicFont card-title">
                        {blog.title}
                    </h1>
                    <br />

                    <sup>Updated at <Moment date={new Date(blog.sys.updatedAt)} format="YYYY/MM/DD" /></sup>
                    <Markdown className="card-text padTop cardMaxWidth" source={blog.content} />
                </div>
            }   
            </div>
        );
    }
}

export default withContentful(Blog);