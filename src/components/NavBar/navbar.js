import React, { useState } from 'react';
import "./navbar.css";
import logo from '../../assets/app_dev.png';
import contactIcon from '../../assets/call.jpeg';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>

        </div>
<button className='desktopMenuBtn' onClick={()=>{
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}}>
    <img src={contactIcon} alt='Contact' className='desktopMenuImg'/>Contact Me
</button>
<img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>

        </div>

    </nav>
  )
}

export default Navbar