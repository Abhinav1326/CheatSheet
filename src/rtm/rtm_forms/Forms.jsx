import React from 'react';
import './forms.css';
import Dis_forms from './Dis_forms';

const  Forms = () =>  {
    return (
        <>
            <h1 className="bd-title" id="content">Forms</h1><br />
            <p className="lead mb-4">Forms examples, styles, layout options and custom components.</p>
            <div className="cont-2">
                <Dis_forms />
            </div>
        </>
    );
};


export default Forms;