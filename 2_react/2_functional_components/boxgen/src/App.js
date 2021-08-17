import React, {useState} from 'react';
import './App.css';
import ColorForm from './componenets/ColorForm';
import DisplayColor from './componenets/DisplayColor';

function App() {
  const [color, setColor] = useState([])
  // const [displayColor, setDisplayColor] = useState([])
  return (
    <div className="App">
      <ColorForm color={color} setColor={setColor}/>
      <DisplayColor color={color}/>
    </div>
  );
}

export default App;
