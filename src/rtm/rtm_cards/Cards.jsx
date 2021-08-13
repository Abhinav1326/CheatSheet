import React from 'react';
import './cards.css';
import Dis_cards from './Dis_card';

const Cards = () =>  {
    return (
        <>
            <h1 className="bd-title" id="content">Cards</h1><br />
            <p className="lead mb-4">Arsenic's cards with multiple designs and layout.</p>
            <div className="cont-2">
                <Dis_cards />
            </div>
            
        </>
    );
};


export default Cards;