
import './App.css';
import React, { useState } from 'react';
import TodoForm from './componenets/TodoForm';
import DisplayTodo from './componenets/DisplayTodo';

function App() {
  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <DisplayTodo todos={todos} setTodos={setTodos} />
      </div>
  );
  }

  export default App;




  