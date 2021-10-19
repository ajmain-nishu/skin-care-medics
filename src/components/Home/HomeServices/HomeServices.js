import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css'

const HomeServices = () => {
    const [homeservices, setHomeServices] = useState([])
    useEffect(() => {
        fetch("./homeServicesData.json")
            .then((res) => res.json())
            .then((data) => setHomeServices(data));
    }, []);
    return (
        <div className="homeservices__bg py-5">
            <h2 className="text-center display-4 fw-bold pt-5 pb-4 mt-5">Services We Offer</h2>
            <p className="text-center text-muted fs-6 pb-5">This is our services. You can find any service what you want</p>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">
                        {
                            homeservices.map(homeservice => <HomeService key={homeservice.id} homeservice={homeservice}></HomeService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;