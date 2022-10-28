import React from 'react'
import sepImage from '../../assets/images/3.png';
import './AboutUs.css';
const AboutUs = () => {
  return (
   <div className="AboutUs" id='about-us'>
    <img src={sepImage} alt="about us" />
    <div className="container about_content">
        <div className="about_content-leftside">
           
            <h3>About us</h3>
            <p>Founded in 2021, Glamp n Camps has been one of best places to escape to, Not like any night spent in a hotel room, bungalow or chalet, sleeping in a luxurious tent in the middle of nature , is a unique experience and a whole new adventure . it is all about relaxing and making memories. Being the first luxury camping site in Australia , our forever goal is to make out guest feel at home , find themseleves in nature and spend unfogettable moments each and every time they book us for an adventure</p>
        

        </div>
        <div className="about_content-rightside">
          <h3>contact us</h3>
          <div className="about_content-header">
          <p>info@glampsncamps.com.au</p>
          <p>+96141611101</p>
          
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
                <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=sydney&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                <a href="https://123movies-to.org"></a>
                <br/>
          <a href="https://www.embedgooglemap.net">custom google map embed</a>
      
          </div>
          </div>
        </div>

    </div>
   </div>
  )
}

export default AboutUs