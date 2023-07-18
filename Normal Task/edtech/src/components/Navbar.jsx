import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='main' className="logo" smooth={true} duration={2000}>
                <h1 style={{color:'white', cursor:'pointer',}}>EdTech</h1>
            </Link>
            <input type="checkbox" id='menu-btn' className="menu-btn" />
            <label className="menu-icon" for='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to='main' className='active' smooth={true} duration={1000}>Home</Link></li>
                <li><Link to='features' smooth={true} duration={1000} >Features</Link></li>
                <li><Link to='services' smooth={true} duration={1000} >Services</Link></li>
                <li><Link to='subscribe' smooth={true} duration={1000} >Subscribe</Link></li>
                <li><Link to='footer' smooth={true} duration={1000} >Contact</Link></li>
            </ul>
            <Link to='#' className='hey'>LogIn</Link>
        </nav>
    </div>
  )
}

export default Navbar