import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import './Activity.css';

import yellowbar from '../../assets/images/yellow.png';

const Activity = () => {
  return (
    <>
  
  <div className="trip-bar">
            <img src={yellowbar} alt="choose your trip" />
            <div className="trip-title">
            <SectionTitle title='choose your' titlespan='Adventure'/>
            <h2>Activity</h2>
            </div>
        </div>
        <div className="activities"> 
        <div className="container">
        <div className="checkboxes">

    <label htmlFor="check1">
      <input id='check1' type="checkbox" name='check1' for="check1"/>
      Check1
      <span className="checkmarker"></span>
    </label>

    <label htmlFor="check2">
    <input type="checkbox" id='check2' name='check1' for="check1"/>
    Check1
    <span className="checkmarker"></span>
  </label>



  <label htmlFor="check3">
    
    <input type="checkbox" name='check1' id='check3' for="check1"/>
    Check1
    <span className="checkmarker"></span>
  </label>

  <label htmlFor="check4">
  <input type="checkbox" id='check4' name='check1' for="check1"/>
  Check1
  <span className="checkmarker"></span>
</label>

  
        </div>
     
        </div>
      
          </div>
    </>
  )
}

export default Activity