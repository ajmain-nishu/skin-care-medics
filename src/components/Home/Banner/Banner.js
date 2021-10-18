import React from 'react';
import bannerImgFirst from '../../../Images/banner_top_first.png'
import bannerImgSecond from '../../../Images/banner_top_second.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bannerImgFirst} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block text-black">
        <h1>17 Years of Experience</h1>
        <p>A New Perspective of Shine</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={bannerImgSecond} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block text-dark">
        <h1>17 Years of Experience</h1>
        <p>We Are Ready For Your Skin Care Help</p>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;