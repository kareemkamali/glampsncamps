import React from 'react';
import yellowbar from '../../assets/images/yellow.png';
import SectionTitle from '../SectionTitle/SectionTitle';

import glamImage from '../../assets/images/adventure3.jpg';

import './Trip.css';

const Trip = () => {
  return (
    <div className="trip">
        <div className="trip-bar">
            <img src={yellowbar} alt=" choose your trip" />
            <div className="trip-title">
            <SectionTitle title='choose your' titlespan='trip'/>
            </div>
           
        </div>


            <div className="trip-items">
                <div className="trip-item">
                    <div className="trip-item-img image-effect">

                    <img src={glamImage}   alt="" />
                    <div className="trip-item-img-desc">
                    <p> bungalow or chalet, sleeping in a luxurious tent in the middle of nature , is a unique experience and a whole new adventure . it is all about relaxing and </p>
                    </div>
                    </div>
                        <h3>glamping</h3>
                </div>

                <div className="trip-item">
                    <div className="trip-item-img image-effect">

                    <img src={glamImage} alt="" />
                    <div className="trip-item-img-desc">
                    <p> bungalow or chalet, sleeping in a luxurious tent in the middle of nature , is a unique experience and a whole new adventure . it is all about relaxing and </p>
                    </div>
                    </div>
                        <h3>glamping</h3>
                </div>


                <div className="trip-item">
                    <div className="trip-item-img image-effect">
                    <img src={glamImage} alt="" />
                    <div className="trip-item-img-desc">
                    <p> bungalow or chalet, sleeping in a luxurious tent in the middle of nature , is a unique experience and a whole new adventure . it is all about relaxing and </p>
                    </div>
                    </div>
                        <h3>glamping</h3>
                </div>



            </div>

<div className="trip-location">
    <div className="trip-location-items">
        <div className="trip-location-item1">
            <div className="trip-location-item1-c">
        </div></div>
        <div className="trip-location-item2">
            <h3>**Notice:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit nulla, corporis saepe, aspernatur fuga, libero molestiae ratione sint vero eos aliquid odit sunt. Voluptatum quos atque accusamus totam molestias.</p>
            </div>
    </div>
</div>

<div className="date">
    <h2>choose your Date</h2>
</div>
    </div>
  )
}

export default Trip