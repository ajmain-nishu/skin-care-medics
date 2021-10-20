import React from "react";
import "./Contact.css";



// navbar contact section
const Contact = () => {
    return (
        <div>

            {/* contact header text */}
            <div className="pt-4  contact__bg">
                <h2 className="display-4 fw-bold pt-5 ps-5 mt-5">Contact Us</h2>
            </div>

            {/* context part */}
            <div className="container">
                <div className="row">

                    {/* contact first part */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center contact__card py-3 shadow-sm m-5">
                            <div className="ps-2 pe-2">
                                <i class="fas fa-phone-volume"></i>
                            </div>
                            <div>
                                <small className="d-block fw-bold fs-5">+00 569 846 358</small>
                                <small className="fw-bold fs-5">+00 896 387 439</small>
                            </div>
                        </div>
                    </div>

                    {/* contact second part */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center contact__card py-3 shadow-sm m-5">
                            <div className="ps-2 pe-2">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <small className="d-block fw-bold fs-5">
                                    +1569 Davis Place
                                </small>
                                <small className="fw-bold fs-5">Filkon, USA</small>
                            </div>
                        </div>
                    </div>

                    {/* contact third part */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center contact__card py-3 shadow-sm m-5">
                            <div className="ps-2 pe-2">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <small className="d-block fw-bold fs-5">
                                    skincare@gmail.com
                                </small>
                                <small className="fw-bold fs-5">medics@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Contact;