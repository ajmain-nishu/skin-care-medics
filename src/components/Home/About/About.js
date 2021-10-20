import React from "react";
import aboutImg from "../../../Images/about.png";
import "./About.css";


// home about section
const About = () => {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="row">
                    
                    {/* image part */}
                    <div className="col-md-6 col-12">
                        <img className="w-100" src={aboutImg} alt="" />
                    </div>

                    {/* description part */}
                    <div className="col-md-6 col-12">
                        <div className="pt-5 px-4">
                            <h2 className="pt-5 fw-light">About Us</h2>
                            <h2>Welcome to our Skin Care Medics</h2>
                            <p>
                                Also known as cosmeceutical skincare, medical-grade skincare is
                                targeted to specific medical conditions and needs, such as acne
                                or wrinkles," explains Patel.
                                <br />
                                "This type of skincare is known to offer both medicinal and
                                cosmetic benefits."
                            </p>
                            <button className="about__btn btn my-5">KNOW MORE</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};




export default About;