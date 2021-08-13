import React from 'react';
import './animation.css';
import Dis_animation from './Dis_animation';

const  Animation = () =>  {
    return (
        <>
            <h1 className="bd-title" id="content">Animations</h1><br />
            <p className="lead mb-4">Arsenic's different types of CSS Animations.</p>
            <div className="cont-2">
                <Dis_animation />
            </div>
        </>
    );
};


export default Animation;