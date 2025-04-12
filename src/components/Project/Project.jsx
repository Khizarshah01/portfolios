import React from "react";
import "../Project/Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projectData"; 
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Project = () => {
  return (
    <div className="pcontainer">
      <h2 className="project-heading">PROJECTS</h2>
      <div className="project-grid">
        {projects.slice(0, 4).map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-buttons">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="icon-button">
                  <FaGithub />
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="icon-button">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="more-projects">
        <Link to="/projects">
        <button className="bts">More Projects
          <FaArrowCircleDown />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
