import React from 'react';
import latestImgOne from '../../../Images/latest-1.jpg'
import latestImgTwo from '../../../Images/latest-2.jpg'
import latestImgThree from '../../../Images/latest-3.jpg'




const Latest = () => {
    return (
        <div className="py-5 ">
            <h2 className="text-center fw-light">Latest</h2>
            <h2 className="text-center pb-5 display-6 fw-bold">News From the Blog</h2>
            <div className="container">
                <div className="row">

                    {/* latestt first part */}
                    <div className="col-12 col-md-4">
                        <div>
                            <img className="w-100" src={latestImgOne} alt="" />
                        </div>
                        <div className="text-center pt-4">
                            <h5>Liposuction to your Tummy Tuck</h5>
                            <p>Liposuction</p>
                            <button className="btn about__btn">READ MORE</button>
                        </div>
                    </div>

                    {/* latest second part */}
                    <div className="col-12 col-md-4">
                        <div>
                            <img className="w-100" src={latestImgTwo} alt="" />
                        </div>
                        <div className="text-center pt-4">
                            <h5>Skin Care Advice From A Surgeon</h5>
                            <p>Skin Care</p>
                            <button className="btn about__btn">READ MORE</button>
                        </div>
                    </div>

                    {/* latest third part */}
                    <div className="col-12 col-md-4">
                        <div>
                            <img className="w-100" src={latestImgThree} alt="" />
                        </div>
                        <div className="text-center pt-4">
                            <h5>Gynecomastia After Weight Loss</h5>
                            <p>Gynecomastia</p>
                            <button className="btn about__btn">READ MORE</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};





export default Latest;