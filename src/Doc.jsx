import React from 'react';
import Buttons from './rtm/Buttons'
import Tabcont from './Tabcont'
import "./rtm/buttons.css"
import "./doc.css"
import './script';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react';


function Doc() {
    const [buttons, setbuttons] = useState("");
    function setDesign(para) {
        setbuttons(para);
    };
    return (
        <>
            <div className="container mt-2">
                <div className="row mt-5 col-md-12">
                    <nav className="col col-2 nav_col" >
                        <ul className="list-unstyled mar mb-0 py-3 pt-md-1">
                            <li className="mb-1">
                                <button onClick={() => setDesign('buttons')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#customize-collapse" aria-expanded="false">
                                    Buttons
                    </button>
                            </li>
                            <li className="mb-1">
                                <button onClick={() => setDesign('navbars')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#customize-collapse" aria-expanded="false">
                                    Navbars
                    </button>
                            </li>
                            <li className="mb-1">
                                <button onClick={() => setDesign('effects')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#layout-collapse" aria-expanded="false">
                                    Effects
                    </button>
                            </li>
                            <li className="mb-1">
                                <button onClick={() => setDesign('cards')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#content-collapse" aria-expanded="false">
                                    Cards
                    </button>
                            </li>
                            <li className="mb-1">
                                <button onClick={() => setDesign('forms')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#forms-collapse" aria-expanded="false">
                                    Forms
                    </button>
                            </li>
                            <li className="mb-1">
                                <button onClick={() => setDesign('animations')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#components-collapse" aria-expanded="false">
                                    Animations
                    </button>
                            </li>
                            <li className="mb-1">
                                <button onClick={() => setDesign('designs')} className="btn d-inline-flex align-items-center rounded collapsed fw-bold" data-bs-toggle="collapse" data-bs-target="#helpers-collapse" aria-expanded="false">
                                    Designs
                    </button>
                            </li>
                            <li className="my-3 mx-4 border-top"></li>
                        </ul>
                    </nav>
                    <div className="col col-10" >
                        <Tabcont name={buttons} />

                    </div>
                </div>
            </div>

        </>
    );

};

export default Doc;


