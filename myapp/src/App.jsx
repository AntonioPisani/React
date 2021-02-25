import React from 'react';
import { render } from 'react-dom';
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router>
      <Link to="/">Usuarios</Link>
      <Switch>
        <Route exact path="/" >
          <Usuarios />
        </Route>
        <Route path="/usuario/:id" >
          <Usuario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
