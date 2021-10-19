
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {logOut, user} = useAuth()
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
                                    className="nav-link fs-5"
                                    to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/register">
                                    Register
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                        <span className="text-muted pt-2">{user?.displayName}&nbsp;</span>
                        {user?.email && <button className="btn btn-outline-secondary btn-md mt-2" onClick={logOut}>Log Out</button>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;