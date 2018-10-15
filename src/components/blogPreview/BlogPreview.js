import React from 'react';
import Moment from 'react-moment';
import * as Markdown from 'react-markdown'

const BlogPreview = ({ blog }) => {
    return (
        <div className="card card-body margin10 boxShadow">
            <h1 className="gothicFont card-title">
                {blog.title}
            </h1>
            <br />

            <sup>Updated at <Moment date={new Date(blog.sys.updatedAt)} format="YYYY/MM/DD" /></sup>
            <Markdown className="card-text padTop cardMaxWidth" source={blog.snippet || blog.content} />

        </div>
    );
};

export default BlogPreview;