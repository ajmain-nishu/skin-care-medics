import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [homeservices, setHomeServices] = useState([])
    useEffect(() => {
        fetch("./homeServicesData.json")
            .then((res) => res.json())
            .then((data) => setHomeServices(data));
    }, []);
    return (
        <div>
            <h2>Services We Offer</h2>
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