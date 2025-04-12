import React from 'react';
import "../Blogs/Blogs.css";
import blogs from "../../data/blogsData";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'; // ✅ import this

const Blog = () => {
  return (
    <div className="bcontainer">
      <h2 className="blog-heading">LATEST BLOGS</h2>
      <div className="blog-row">
        {blogs.slice(0, 3).map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              {/* If blog.link is external (like Medium), keep <a /> */}
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="more-blogs">
        <Link to="/blogs">
          <button className='bts'>
            More Blogs <FaArrowCircleDown />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
