import React from 'react';
import './App.scss';
import Home from '../Home/Home.js';
import Meals from "../Meals/Meals.js";
import Plans from "../Plans/Plans.js";
import Lists from "../Lists/Lists.js";
import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Header />
          <section className="Section-style">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/meals" component={Meals}/>
              <Route path="/plans" component={Plans}/>
              <Route path="/lists" component={Lists}/>
            </Switch>
          </section>
        </Router>
    </div>
  );
}

export default App;
