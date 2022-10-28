import React from 'react'
import heroImage from '../../assets/images/heroImage.jpg'
import './HeroSection.css'
import {IoCaretForwardOutline}  from 'react-icons/io5'
import Button from '../shared/Button/Button';
import {Link} from 'react-router-dom'
const HeroSection = () => {
  return (
  <div className="hero-section">
    <div className='hero-image'>
    <img src={heroImage} alt='glamps image'/>
  </div>
  <div className='bottom-button'>
    <div className="bottom-button-wrapper">
      <Link to='/booking'>

    <Button>Book Now <IoCaretForwardOutline/></Button>
      </Link>
    </div>
 
  </div>
  
    </div>
  )
}

export default HeroSection