import React from 'react';
import './Adventure.css';
import bg1 from '../../assets/images/1.png';
import bg2 from '../../assets/images/2.png';
import adventure1 from '../../assets/images/adventure1.jpg'
import adventure2 from '../../assets/images/adventure2.jpg'
import adventure3 from '../../assets/images/adventure3.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
const Adventure = () => {
  return (
  <>
  <div className="header-adventure">
    <div className="adventure_header-image">
        <img className='bg1' src={bg1} alt="background" />
        <img className='bg2' src={bg2} alt="background" />
        <div className="aventure_header-title">
            <SectionTitle title='let the adventure' titlespan='begin' />
        </div>
    </div>
  </div>
    <div className="adventure">
      <div className="overlay-wrap">

     
      <div className="overlay">
        <div className="container">
          <div className="adventure_content-items ">
                  <div className="adventure_content-item image-effect">
                  <img src={adventure1} alt="camping" />
                  <div className="adventure_content-item-title">
                    <h3>glamping</h3>
                  </div>
                  </div>
                  <div className="adventure_content-item image-effect">
                  <img src={adventure3} alt="camping" />
                  <div className="adventure_content-item-title">
                    <h3>Camping</h3>
                  </div>
                  </div>
                  <div className="adventure_content-item image-effect">
                  <img src={adventure2} alt="Events" />
                  <div className="adventure_content-item-title">
                    <h3>evnets</h3>
                  </div>
                  </div>
          </div>



        </div>
        <div className='adventure_title-bottom'>

        <SectionTitle title='CAMP YOUR WAY ARROUND' titlespan='australia'/>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Adventure