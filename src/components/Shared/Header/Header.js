import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';



// navbar section
const Header = () => {
    const { logOut, user } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar__bg navbar-light py-3">
                <div className="container">

                    {/* header logo */}
                    <Link className="navbar-brand" to="/home">
                        <h2><i>Madics</i></h2>
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* header link */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {/* home link */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5"
                                    to="/home">
                                    Home
                                </Link>
                            </li>

                            {/* services link */}
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/services">
                                    Services
                                </Link>
                            </li>

                            {/* gallery part */}
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/service/gallery">
                                    Gallery
                                </Link>
                            </li>

                            {/* contact part */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5"
                                    to="/contact">
                                    Contact
                                </Link>
                            </li>

                            {/* doctor part */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5"
                                    to="/doctor">
                                    Doctor
                                </Link>
                            </li>


                            {user?.email ?
                                <div>

                                    {/* log out button */}
                                    <button className="btn btn-outline-secondary btn-md mt-2" onClick={logOut}>Log Out</button>
                                    {/*sign in user name */}
                                    <span className="text-muted pt-2"> Signed in as: {user?.displayName}</span>
                                </div>
                                :
                                <div className="d-md-inline-flex">

                                    {/* registration link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5" to="/register">
                                            Register
                                        </Link>
                                    </li>

                                    {/* login link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};





export default Header;