import React from 'react';
import './App.scss';
import Header from "../Header/Header.js";
import Home from '../Home/Home.js';
import Lists from "../Lists/Lists.js";
import MealsManager from "../Meals/MealsManager.js";
import Navigation from "../Navigation/Navigation.js";
import Plans from "../Plans/Plans.js";

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
              <Route path="/meals" component={MealsManager}/>
              <Route path="/plans" component={Plans}/>
              <Route path="/lists" component={Lists}/>
            </Switch>
          </section>
      </Router>
    </div>
  );
}

export default App;
