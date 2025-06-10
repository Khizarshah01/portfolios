import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import "../page/Blogs.css";
import blogs from '../data/blogsData';

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className='cont'>
      <div className="blogs-container">
        <div className="blogs-header">
          <h1 className="blogs-title">My <span className="highlight">Writings</span></h1>
          <p className="blogs-subtitle">Technical articles and development insights</p>
        </div>
        
        <div className="blogs-list">
          {blogs.map((blog, index) => (
            <a 
              href={blog.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blog-item" 
              key={index}
            >
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-dot">•</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-read-more">
                  Continue reading <span className="arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
              </div>
      </div>
    </>
  );
};

export default Blogs;