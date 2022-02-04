import React from 'react';
import Header from './components/header';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import './App.sass';
import { useState } from 'react';


function App() {
  const [list, setList] = useState([]);
  console.log(list);
  
  return (
    <div className="App">
      <Header />
      <TodoForm setList={setList} list={list}/>
      <TodoList list={list}/>
    </div>
  );
}

export default App;
