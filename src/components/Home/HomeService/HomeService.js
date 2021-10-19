import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const {name, img, description} = props.homeservice
    return (
        <div className="col-lg-4 col-sm-6 col-12 gy-4">
            <div className="card h-100">
                <div className="">
                    <img className="" src={img} alt="" />
                </div>
                <div className="">
                    <h2 className="">{name}</h2>
                    <p>{description.slice(0, 70)}....</p>
                    <Link>
                        <button>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeService;