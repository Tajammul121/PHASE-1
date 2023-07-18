import React from 'react'
import featureimage from "../images/pngwing.com.png"

const Features = () => {
  return (
    <div id='features'>
        <div className="features-model">
            <img src={featureimage} alt="features-img" />
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate perspiciatis sint totam sequi repellat minus, sit et laudantium nobis sed minima cumque quia numquam iste quae! Ut expedita esse rem veritatis inventore minima nemo facilis, quae perspiciatis voluptates soluta.</p>
            <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features