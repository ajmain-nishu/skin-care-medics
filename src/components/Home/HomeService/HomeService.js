import React from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css';



// home service card section
const HomeService = (props) => {
    //destructuring
    const { id, name, img, description } = props.homeservice;
    return (
        <div className="col-lg-4 col-sm-6 col-12 gy-4 gx-5">
            <div className="card h-100 shadow-sm homeservice__border">

                {/* image part */}
                <div className="text-center my-3">
                    <img className="homeservice__img" src={img} alt="" />
                </div>

                {/* text part */}
                <div className="text-center px-4">
                    <h2 className="fs-3">{name}</h2>
                    <p className="text-muted">{description.slice(0, 70)}....</p>

                    {/* button */}
                    <Link to={`/service/${id}`}>
                        <button className="btn homeservice__btn mb-4">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};




export default HomeService;