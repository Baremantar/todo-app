import React from 'react';
import Header from './components/header';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import './App.sass';
import { autocompleteClasses } from '@mui/material';
import { useState } from 'react';


function App() {
  const [list, setlist] = useState([]);
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
