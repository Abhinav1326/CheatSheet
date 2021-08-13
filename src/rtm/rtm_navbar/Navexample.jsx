import React from 'react';
import './navex.css';
import Dis_navbar from './Dis_navbar';

const  Navexample = () =>  {
    return (
        <>
            <h1 className="bd-title" id="content">Navbars</h1><br />
            <p className="lead mb-4">Arsenic's responsive navigation header, navbar and more including support for our collapse.</p>
            <div className="cont-2">
                <Dis_navbar />
            </div>
        </>
    );
};


export default Navexample;