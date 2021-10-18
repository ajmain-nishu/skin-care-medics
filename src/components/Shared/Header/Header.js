import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar__bg navbar-light py-3">
                <div className="container">

                    {/* header logo */}
                    <Link className="navbar-brand" to="/home">
                        <h2>Madics</h2>
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
                        <ul className="navbar-nav ms-auto pt-2">
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5 header__nav"
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 header__nav" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 header__nav" to="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 header__nav" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;