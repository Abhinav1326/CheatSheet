import React from 'react';
import Buttons from './rtm/Buttons.jsx';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Effects from "./rtm/rtm_effects/Effects";
import Navexample from "./rtm/rtm_navbar/Navexample";
import Cards from "./rtm/rtm_cards/Cards";
import Forms from "./rtm/rtm_forms/Forms";
import Animation from "./rtm/rtm_animations/Animation";
import Design from "./rtm/rtm_designs/Design";

const Tabcont = (props) =>  {
    // console.log(typeof props.name);
    const button = "buttons";
    const nav = "navbars";
    const effect = "effects";
    const card = "cards";
    const form = "forms";
    const animation = "animations";
    const design = "designs";
    const name = props.name;
    
    if (name == button) {
        return (
            <Buttons />
        )
    }

    else if (name == nav) {
        return (
            <Navexample />
        )
    }

    else if (name == effect) {
        return (
            <Effects />
        )
    }

    else if (name == card) {
        return (
            <Cards />
        )
    }
    else if (name == form) {
        return (
            <Forms />
        )
    }
    else if (name == animation) {
        return (
            <Animation />
        )
    }
    else if (name == design) {
        return (
            <Design />
        )
    }
    
    else {
        return (
            <>
                <Buttons />
            </>
        )
    }
    
};


export default Tabcont;