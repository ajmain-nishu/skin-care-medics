import React from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const {serviceId} = useParams
    return (
        <div>
            <h2>Hello {serviceId}</h2>
        </div>
    );
};

export default Services;