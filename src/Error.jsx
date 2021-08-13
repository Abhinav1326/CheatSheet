import React from 'react';
import './error.css';
import {NavLink} from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="error_main_cont">
                <div className="error_container">
                    <div className="error_content">
                        <h2>404</h2>
                        <h4>Opps! Page not found</h4>
                        <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                        <NavLink to="/">Back To Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error;