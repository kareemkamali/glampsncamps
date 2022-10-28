import React from 'react'
import sepBackground from '../../../assets/images/4.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
        <img src={sepBackground} alt="glamps n camps footer" />
        <div className="container footer-content">
        <div className='footer-leftside'>
                  <p>karim kamali@2022 All right reserved</p>
                </div>
                <div className="footer-rightside">
                    <ul className="list-unstyle">
                        <li><a href=""> Privacy</a></li>
                        <li><a href=""> Terms</a></li>
                        <li><a href=""> Sitemap</a></li>
                        <li><a href=""> Join Us Now!</a></li>
                    </ul>
                </div>
        </div>
                
          
        
    </div>
  )
}

export default Footer