import React,{useState} from 'react'
import Box from '@mui/material/Box';
import GlobalList from './components/GlobalLists';
import './App.sass';
import List from './components/List';

function App() {

  const [list, setList] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleDispatchTodos(event: any) {
    list.forEach((item: any) => {
        item.isActive = false
    });
    //@ts-ignore
    list.filter((item: any)=> item.name == event.currentTarget.className)[0].isActive = true;
    //@ts-ignore
    const todosInList = list.filter((item: any)=> item.name == event.currentTarget.className)[0].todos;

    setTodos(todosInList);
    setList([...list]);
  }
  
  return (
    <Box className="App">
      <GlobalList setList={setList} list={list} handleDispatchTodos={handleDispatchTodos}/>
      <List setList={setList} list={list} todos={todos} setTodos={setTodos}/>
    </Box>
  );
}

export default App;
