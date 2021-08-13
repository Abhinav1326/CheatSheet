import React from 'react';
import './design.css';
import Dis_design from './Dis_design';

const  Design = () =>  {
    return (
        <> 
            <h1 className="bd-title" id="content">Design</h1><br />
            <p className="lead mb-4">Use Arsenic’s custom designs for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            <div className="cont-2">
                <Dis_design />
            </div>
        </>
    );
};


export default Design;