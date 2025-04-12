import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [top, setTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // hide on scroll down
    } else {
      setShow(true); // show on scroll up
    }

    if(window.scrollY < 300){
      setTop(true);
    }
    else{
    setTop(false);  
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${show ? 'show' : 'hide'}`}>
      <div className="nav-left">
        <h3 className={`navname ${top ? 'visible' : 'hidden'}`}>KHIZAR SHAH<span className='dot'>.</span></h3>
      </div>
      <div className="rightmenu">
        <h2 className="nav-link">About</h2>
        <h2 className="nav-link">Blogs</h2>
        <div className='theme-toggle' onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
