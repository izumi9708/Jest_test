import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import ToDoList from './TodoList ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>react jest_test</p>

        <Counter initialValue={0}/>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
