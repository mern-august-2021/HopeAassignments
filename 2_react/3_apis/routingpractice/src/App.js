
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './componenets/Home';
import DisplayNum from './componenets/DisplayNum';
import DisplayHello from './componenets/DisplayHello';
import DisplayColor from './componenets/DisplayColor';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DisplayNum path="/:number"/>
        <DisplayHello path="/hello/:word"/>
        <DisplayColor path="/hello/:color/:bgColor/:word"/>
      </Router>
      
    </div>
  );
}

export default App;
