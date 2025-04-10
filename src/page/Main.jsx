import React from 'react'
import Landing from "../components/Landing/Landing"
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Contacts from '../components/Contacts/Contacts'
import Project from '../components/Project/Project'
import Skill from '../components/Skill/Skill'
import Blog from '../components/Blogs/Blog'

const Main = () => {
  return (
    <>
    <Navbar />
    <Landing />
    <About />
    <Education />
    <Skill />
    <Project />
    <Blog />
    <Contacts />
    </>
  )
}

export default Main