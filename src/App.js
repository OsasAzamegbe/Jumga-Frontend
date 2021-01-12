import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Signup from './pages/signup/SignUp';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact to="/" component={Home}/>
          <Route to="/signup/" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;