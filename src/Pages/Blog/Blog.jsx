import React from 'react'
import 'assets/css/Blog.css'
import BlogContent from './BlogContent'


function Blog() {
    return (
        <div className='blog'>
            <div className="blog-title">
                <h1>Blog </h1>
                <p className='blg-p'>This is sample of page tagline and you can set it up using page option</p>
            </div>
            <BlogContent/>
        </div>
    )
}

export default Blog
