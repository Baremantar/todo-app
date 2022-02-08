import Box from '@mui/material/Box';
import GlobalList from './components/GlobalLists';
import './App.sass';
import {useState} from 'react';
import List from './components/List';

function App() {

  const [list, setList] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleDispatchTodos(event: any) {
    list.forEach((item: any) => {
        item.isActive = false
    });
    // console.log(event.currentTarget.className)
    //@ts-ignore
    list.filter((item: any)=> item.name == event.currentTarget.className)[0].isActive = true;
    //@ts-ignore
    const todosInList = list.filter((item: any)=> item.name == event.currentTarget.className)[0].todos;

    console.log(todosInList)
    setTodos(todosInList);
    setList([...list]);
  }

  console.log(list);
  return (
    <Box className="App">
      <GlobalList setList={setList} list={list} handleDispatchTodos={handleDispatchTodos}/>
      <List setList={setList} list={list} todos={todos} setTodos={setTodos}/>
    </Box>
  );
}

export default App;
