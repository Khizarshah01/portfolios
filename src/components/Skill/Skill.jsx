import React from "react";
import "../Skill/Skill.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faJs,
  faLinux,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { InlineIcon } from "@iconify/react";
import mongodbIcon from "@iconify/icons-cib/mongodb";
import mysqlIcon from "@iconify/icons-cib/mysql";
import javaIcon from "@iconify/icons-logos/java";
import pythonIcon from "@iconify/icons-logos/python";
import expressIcon from "@iconify/icons-simple-icons/express";
import tailwindIcon from "@iconify/icons-simple-icons/tailwindcss";

const Skill = () => {
  return (
    <div className="uscontainer">
    <div className="scontainer">
    <h3 className="skill-heading">MY SKILLS</h3>
    <div className="skills-grid">
      <p className="skill-item"><span>○</span> <FaJava /> Java</p>
      <p className="skill-item"><span>○</span> <FaPython /> Python</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faReact} /> React</p>
      <p className="skill-item"><span>○</span> <InlineIcon icon={mongodbIcon} /> MongoDB</p>
      <p className="skill-item"><span>○</span> <InlineIcon icon={mysqlIcon} /> MySQL</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faJs} /> JavaScript</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faGitAlt} /> Git</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faLinux} /> Linux</p>
      <p className="skill-item"><span>○</span> <InlineIcon icon={expressIcon} /> Express.js</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faNodeJs} /> Node.js</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faHtml5} /> HTML</p>
      <p className="skill-item"><span>○</span> <FontAwesomeIcon icon={faCss3Alt} /> CSS</p>
      <p className="skill-item"><span>○</span> <InlineIcon icon={tailwindIcon} /> TailwindCSS</p>
    </div>
  </div>
    </div>
  
  );
};

export default Skill;
