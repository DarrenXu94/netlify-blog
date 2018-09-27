import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className="card card-body">
        <h4 className="card-title">
            {blog.title}
        </h4>
        <p className="card-text">
            {blog.content}
        </p>
        </div>
    );
};

export default Blog;