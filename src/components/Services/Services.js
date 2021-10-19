import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const {serviceId} = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch('/homeServicesData.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    }, []);
    useEffect(() => {
        const foundService = serviceDetails.find(service => service?.id === serviceId)
        console.log(foundService)
    }, [serviceDetails])
    return (
        <div>
            
        </div>
    );
};

export default Services;