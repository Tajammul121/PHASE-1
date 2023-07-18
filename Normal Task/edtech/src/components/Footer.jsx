import React from 'react'


const Footer = () => {

    const year = new Date().getFullYear
  return <footer id='about' className='footer' data-aos="fade-up" data-aos-duration="1500">
    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_box">
                <div className="logo">
                    <div className="logo_h1">
                    <h1 style={{color:'white',}}>EdTech</h1>
                    </div>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat
                    amet laboriosam laborus odit rem est?
                </p>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#">Our program</a></li>
                    <li><a href="#">Our plan</a></li>
                    <li><a href="#">Become a member</a></li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </div>

        <p className='copyright'>Copyright - {year} developed by Tajammul. All rights reserved.</p>
    </div>
  </footer>
}

export default Footer