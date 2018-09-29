import React from 'react';
import Moment from 'react-moment';
import * as Markdown from 'react-markdown'

const Blog = ({ blog }) => {
    return (
        <div className="card card-body">
            <h1 className="gothicFont card-title">
                {blog.fields.title}
            </h1>
            <br />

            <sup>Updated at <Moment date={new Date(blog.sys.updatedAt)} format="YYYY/MM/DD" /></sup>
            <Markdown className="card-text padTop" source={blog.fields.content} />

        </div>
    );
};

export default Blog;