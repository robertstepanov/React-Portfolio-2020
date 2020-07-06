import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import {Contact} from './components/Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path='/'><Home /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/projects'><Projects /></Route>
      <Route path='/contact'><Contact /></Route>
    </div>
  );
}

export default App;
