import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';





const Services = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([])

    // local fake data fetch
    useEffect(() => {
        const url = "/homeServicesData.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let searchId = data.filter((singledata) => singledata.id === serviceId);
                setService(searchId)

            })
    }, [serviceId])
    return (
        <div>

            {/* matching data mapping */}
            {
                service.map(singleService => (
                    <div>
                        <div className="container">
                            <div className="text-center p-5">

                                {/* image part */}
                                <div>
                                    <img className="" src={singleService.img} alt="" />
                                </div>

                                {/* text part */}
                                <h3 key={singleService.id}>Name: {singleService.name}</h3>
                                <h3>Description</h3>
                                <p>{singleService.description}</p>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};





export default Services;