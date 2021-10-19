import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Services = () => {
    const {serviceId} = useParams()
    const [servicee, setService] = useState([])
    useEffect(() => {
        fetch('/homeServicesData.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    const search = servicee.find(details => details.id === servicee)
    console.log(search?.name)
    return (
        <div>
            <h2>Hello {serviceId}</h2>
            <h2>{servicee?.name}</h2>
        </div>
    );
};

export default Services;