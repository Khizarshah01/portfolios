import React from 'react'
import "../Blogs/Blogs.css"
import blogs from "../../data/blogsData";


const Blog = () => {
  return (
    <div className="bcontainer">
      <h2 className="blog-heading">Latest Blogs</h2>
      <div className="blog-row">
        {blogs.slice(0, 3).map((blog, index) => (
          <div className="blog-card" key={index}>
          
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="more-blogs">
        <a href="/blogs">
          <button>More Blogs</button>
        </a>
      </div>
    </div>
  );
};
export default Blog;
