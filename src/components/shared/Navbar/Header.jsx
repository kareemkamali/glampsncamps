import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png';

import {FaTimes,FaBars, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp} from 'react-icons/fa';
import './Header.css';
import {Link} from 'react-router-dom'
const Header = () => {
   const [toggle,setToggle]=useState(false);
   
  return (

<header className='header'>
    <div className='header-logo'>
        <img src={logo} alt="glamps and camps" />
    </div>
        <nav className="navbar" onClick={()=>{setToggle(!toggle)}}>
            <ul className='list-unstyle navbar-items' id={toggle?'nav-resonsive':''} >
            <li>
            <a href="/#">Home</a>
        </li>
        <li>
            <Link to="/booking">Lets Go Out</Link>
        </li>
        <li>
            <Link to="/booking">Activities</Link>
        </li>
        <li>
            <a href="#about-us">About us</a>
        </li>
        <li>
            <a href="#about-us">Contact us</a>
        </li>
            </ul>
        </nav>
        <div className="social-media">
            <ul className="list-unstyle">
                <li>
                    <Link to="/"> <FaFacebook /></Link>
                </li>
                
                <li>
                    <Link to="/"> <FaInstagram/></Link>
                </li>
                <li>
                    <Link to="/"> <FaTiktok /></Link>
                </li>
                <li>
                    <Link to="/"> <FaWhatsapp /></Link>
                </li>
            </ul>
            {/* <FaFacebook/>
            <FaInstagram/>
            <FaTiktok/>
            <FaWhatsapp/> */}
        </div>
        {!toggle&&<FaBars className='icon-bars' onClick={()=>{setToggle(!toggle)}} />}
       {toggle&& <FaTimes className='icon-bars' onClick={()=>{setToggle(!toggle)}} />}
</header>


//    <header className='header'>
//     <div className="header-content">
//     <img src={logo} alt="Glamps Camps" />
//     <nav className='navbar'>
//     <ul className={`list-unstyle ${toggle?'nav-responsive':'nav'}` } onClick={()=>{setToggle(!toggle)}}>
//         <li className='link-item'>
//             <a href="#">Home</a>
//         </li>
//         <li className='link-item'>
//             <a href="">Lets Go Out</a>
//         </li>
//         <li className='link-item'>
//             <a href="">Activities</a>
//         </li>
//         <li className='link-item'>
//             <a href="">About us</a>
//         </li>
//         <li className='link-item'>
//             <a href="">Contact us</a>
//         </li>
//     </ul>
//     <FaTimes className='nav-btn nav-close-btn' onClick={()=>{setToggle(false)}}/>
//     </nav>
//     <FaBars className='nav-btn' onClick={()=>{setToggle(true)}}/>
// <div className="social-media">
//     <ul className="list-unstyle">
//         {/* <li className='social-link'>
        
//         <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
//        </li>
//         <li className='social-link'>
//         <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        
//         </li>
//         <li className='social-link'>
//         <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
//         </li>
//         <li className='social-link'>
//         <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
//         </li> */}
//     </ul>
// </div>

//     </div>

   

  

//    </header>
  )
}

export default Header