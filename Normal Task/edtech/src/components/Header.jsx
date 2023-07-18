import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className="name">
            <h1>It's a <span>EdTech</span> Website </h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum odit suscipit error reiciendis hic! Rem eos iusto illum commodi.</p>
            <div className="header-btns">
                <a href='#' className='cv-btn'>Enroll Now</a>
                <a href='#' className='cv-btn1'>Download App</a>
            </div>
        </div>
        <div className="arrow"></div>
    </div>
  )
}

export default Header