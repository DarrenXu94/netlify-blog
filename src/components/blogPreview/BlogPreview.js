import React from 'react';
import Moment from 'react-moment';
import * as Markdown from 'react-markdown'
import { withRouter } from 'react-router-dom'
import './blogPreview.css'

const BlogPreview = ({ blog, history }) => {
    return (
        <div className="card card-body margin10 boxShadow">
            <h1 className="gothicFont card-title">
                {blog.title}
            </h1>
            <br />

            <sup>Updated at <Moment date={new Date(blog.sys.updatedAt)} format="YYYY/MM/DD" /></sup>
            <Markdown className="card-text padTop cardMaxWidth" source={blog.snippet || blog.content} />
            {blog.snippet &&
                <a className="readMore" onClick={() => history.push(`/Blog/${blog.sys.id}`)}>
                    Read more <img alt="..." src="https://png.icons8.com/material-outlined/16/000000/circled-right-2.png"></img>
                </a>
            }
        </div>
    );
};

export default withRouter(BlogPreview);