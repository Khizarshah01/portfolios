import React from 'react'
import './style/Navbar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='navname'>KHIZAR SHAH<span className='dot'>.</span></h3>
      <div className="flex gap-8 items-center">
  {/* GitHub Link */}
  <a 
    href="https://github.com/khizarshah01" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
  >
    <GitHubIcon style={{ width: "18px", height: "18px" }} />
    <p className="tracking-wide text-base pt-px">Github</p>
  </a>

  {/* Twitter (X) Link */}
  <a 
    href="https://x.com/khizarshah_01" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
  >
    <XIcon style={{ width: "18px", height: "18px" }} />
    <p className="tracking-wide text-base">Twitter</p>
  </a>
</div>

    </div>
  )
}

export default Navbar