import React from 'react'
import './HeroSecondPage.css';
import mapImage from '../../assets/images/map.png';
const HeroSecondPage = () => {
  return (
    <div className="hero-second-page">
        <div className="hero-second-image">
            <img src={mapImage} alt="glamps and camps" />
        </div>
    </div>
  )
}

export default HeroSecondPage