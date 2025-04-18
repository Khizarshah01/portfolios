import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import useMedia from "use-media";
import { ThemeContext } from '../../context/ThemeContext';
import "./About.css";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const isWide = useMedia({ minWidth: 1024 });
  const { theme, drawerOpen } = useContext(ThemeContext);

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <div id="about" className="about-container">
  <div className="line-styling">
    <div className="style-circle" ></div>
    <div className="style-circle" ></div>
    <div className="style-line" ></div>
  </div>

  <motion.div
    className="about-text"
    data-aos={isWide ? "fade-left" : "fade-up"}
  >
    <h3 className="about-heading">
      ABOUT ME
    </h3>
    <h2 className="about-description">
          I am passionate about building scalable web applications, experimenting with emerging technologies like Web3, and contributing to open-source projects.
          <br />
          I enjoy solving problems through code, exploring areas like Machine Learning and Blockchain, and constantly learning new skills to become a better full-stack developer.
        <br />
        When I'm not coding, I love playing chess and analyzing strategies.
        </h2>
  </motion.div>

  <div
    className="about-image-section"
    data-aos={isWide ? "fade-right" : "fade-down"}
  >
    <div className="separator"></div>
    <img
      className="about-image"
      src="/coding.png"
      alt="Coding illustration"
    />
  </div>
</div>

  );
};

export default About;
