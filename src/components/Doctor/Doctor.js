import React from 'react';
import doctorOne from '../../Images/doctor-1.png';
import doctorTwo from '../../Images/doctor-2.png';
import doctorThree from '../../Images/doctor-3.png';



// navbar doctor section
const Doctor = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">

                        {/* text part */}
                        <h2 className="text-center pt-5">Meet Our Doctors</h2>
                        <p className="text-center pb-5 text-muted">This is our Doctor. This doctors are very good with highly Profession</p>
                    </div>

                    <div className="col-md-8 col-12">
                        <div className="row">

                            {/* image one */}
                            <div className="col-md-4 col-12 py-2">
                                <img className="w-100" src={doctorOne} alt="" />
                            </div>

                            {/* image two */}
                            <div className="col-md-4 col-12 py-2">
                                <img className="w-100" src={doctorTwo} alt="" />
                            </div>

                            {/* image three */}
                            <div className="col-md-4 col-12 py-2">
                                <img className="w-100" src={doctorThree} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Doctor;