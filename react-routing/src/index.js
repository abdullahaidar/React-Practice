import React from 'react';
import ReactDOM from 'react-dom';


import About from './components/about';
import Home from './components/home';
import Services from './components/services';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>Introduction to React Router DOM</div>
      <ul className="nav">
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link></li>
        <li className="sub"> <Link to="/services">Services</Link>
          <ul>
            <li>
              <Link to="/services/service1">service1</Link>
            </li>
            <li>
              <Link to="/services/service2">service2</Link>
            </li>
            <li>
              <Link to="/services/service3">service3</Link>
            </li>
          </ul>
        </li>
      </ul>



      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /></Route>
        <Route path="/services"> <Services /> </Route>

      </Switch>


    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
