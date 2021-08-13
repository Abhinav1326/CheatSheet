import React from 'react';
import logo from './logo1.png';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow  rounded">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/buttons">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to="/doc">Documentation</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to="/websites">Websites</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;