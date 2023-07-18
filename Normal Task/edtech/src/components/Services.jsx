import React from 'react'
import Box from './Box'
import image1 from '../images/Python.png'
import image2 from '../images/reactjs.jpg'
import image3 from '../images/ds.png'
import image4 from '../images/FD.webp'





function Services() {
  return (
    <div className='services'>
         <div className="s-heading">
            <h1>Services</h1>
            <p>Here are some Courses I provide !</p>
        </div>
        <div className="b-container">
            <Box image= {image1} alt='image1' button='PYTHON'/>
            <Box image= {image2} alt='image2' button='REACT'/>
            <Box image= {image3} alt='image3' button='Dta Science'/>
            <Box image= {image4} alt='image3' button='Fullstack Developer'/>
        </div>
    </div>
  )
}

export default Services