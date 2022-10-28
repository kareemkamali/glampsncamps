import React from 'react'
import './Categories.css';
import biking from'../../assets/images/biking.jpg';
import fishing from'../../assets/images/fishing.png'
import kayaking from'../../assets/images/kayaking.jpg'
import wheel from'../../assets/images/wheel.jpg'
const Categories = () => {
  return (
  <div className="categories">
    <div className="categories-items">
        <div className="categories-item image-effect-right">
            <img src={biking} alt="biking" />
            <h3>Biking</h3>
        </div>
        <div className="categories-item image-effect-right">
            <img src={fishing} alt="fishing" />
            <h3>fishing</h3>
        </div>
        <div className="categories-item image-effect-right">
            <img src={kayaking} alt="kayaking" />
            <h3>kayaking</h3>
        </div>
        <div className="categories-item image-effect-right">
            <img src={wheel} alt="wheel" />
            <h3>4 wheels drive</h3>
        </div>
    </div>
  </div>
  )
}

export default Categories