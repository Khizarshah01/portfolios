import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // hide on scroll down
    } else {
      setShow(true); // show on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${show ? 'show' : 'hide'}`}>
      <h3 className='navname'>KHIZAR SHAH<span className='dot'>.</span></h3>
    </div>
  );
};

export default Navbar;
