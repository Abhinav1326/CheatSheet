import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Doc from './Doc';
import Websites from './Websites';
import './rtm/buttons.css';
import Error from './Error';


function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/doc" component={Doc} />
          <Route exact path="/websites" component={Websites} />
          <Route component={Error} />
        </Switch>
    </>
  );
}

export default App;
