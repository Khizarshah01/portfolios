import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import "../page/Projects.css";
import projectsData from '../data/projectData';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="khz-projects-container">
        <h1 className="khz-projects-heading">My Projects</h1>
        
        <div className="khz-projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="khz-project-card">
              <div className="khz-project-img-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="khz-project-img"
                />
              </div>
              
              <div className="khz-project-content">
                <h3 className="khz-project-title">{project.title}</h3>
                
                <p className="khz-project-desc">
                  {project.description}
                </p>
                
                <div className="khz-project-btns">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="khz-project-btn khz-github-btn"
                    >
                      GitHub
                    </a>
                  )}
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="khz-project-btn khz-live-btn"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;