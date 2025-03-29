import React from 'react';
import './style/Home.css';
import Footer from './Footer';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <div className='hero'>
      {/* Hero Section */}
      <h1>Hi, I am <span className="highlight">Khizar Shah!</span></h1>
      <p className='text-gray-400 text-xl'>I am a second-year Computer Science student, mainly working in full-stack development. Currently exploring Web3, Blockchain, and contributing to open source.</p>

      {/* About Me Section */}
      <h2>About Me</h2>
      <p className='text-gray-400 text-xl'>I am passionate about building scalable web applications, experimenting with emerging technologies like Web3, and contributing to open-source projects. I enjoy solving problems through code and constantly learning new skills to improve my development workflow.</p>

      {/* Experience Section */}
      <h2>Experience</h2>
      <p className='text-gray-400 text-xl'>Currently no <span className='highlight-cut'>"official" experience</span>, but sharpening my skills while hunting for an internship.</p>

      {/* Skills Section */}
      <h2>Skills</h2>
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <pre className="terminal-body">
          <span className="line"><span className="category frontend">Frontend:</span> ['React.js', 'Vite', 'Tailwind CSS'],</span>{'\n'}
          <span className="line"><span className="category backend">Backend:</span> ['Node.js', 'Express.js', 'Java (Custom Web Server)'],</span>{'\n'}
          <span className="line"><span className="category database">Databases:</span> ['MongoDB', 'Firebase'],</span>{'\n'}
          <span className="line"><span className="category tools">Tools:</span> ['Docker', 'Postman', 'Git'],</span>{'\n'}
          <span className="line"><span className="category languages">Programming Languages:</span> ['Java', 'C', 'JavaScript'],</span>{'\n'}
          <span className="line"><span className="category exploring">Exploring:</span> ['Blockchain (Solidity)', 'Web3.js', 'Ether.js']</span>{'\n'}
        </pre>
      </div>

      {/* Projects Section */}
      <h2>Projects</h2>
      <ul>
        <li onClick={() => navigate('/serious-projects')} className="project-title">
          <strong>Serious Projects:</strong> All my important projects
        </li>
        <li onClick={() => navigate('/fun-projects')} className="project-title">
          <strong>Fun Projects:</strong> All my fun projects
        </li>
      </ul>

      {/* Contact Section */}
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="mailto:khizar.shah010@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon /> 
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon /> 
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <XIcon /> 
        </a>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
