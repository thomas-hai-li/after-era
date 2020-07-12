import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../css/App.css';
import Navbar from './Navbar';
import Home from '../views/Home';
import Explore from '../views/Explore';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/explore' component={Explore} />
      </div>
    </BrowserRouter>
  );
}

export default App;
