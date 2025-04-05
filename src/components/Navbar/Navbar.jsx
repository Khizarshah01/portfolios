import React from 'react'
import '../Navbar/Navbar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='navname'>KHIZAR SHAH<span className='dot'>.</span></h3>
     {/* <div className="navicons">
      <GitHubIcon style={{ width: "16px", height: "16px" }} /><p>Github</p>
      <XIcon style={{ width: "16px", height: "16px" }} /><p>Twitter</p>
     </div> */}
    </div>
  )
}

export default Navbar