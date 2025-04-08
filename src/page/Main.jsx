import React from 'react'
import Landing from "../components/Landing/Landing"
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Education from '../components/Education/Education'

const Main = () => {
  return (
    <>
    <Navbar />
    <Landing />
    <About />
    <Education />
    </>
  )
}

export default Main