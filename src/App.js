import { useState } from 'react';
import './App.css';
import Button from './Button.js';
import Todo from './Todo.js';
import Scoreboard from './Scoreboard/Scoreboard.js';


function App() {

  return (
    <div className="App">
        {/* <Todo></Todo> */}
        <Scoreboard></Scoreboard>
    </div>
  );
}

export default App;
