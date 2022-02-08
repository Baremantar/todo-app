import Box from '@mui/material/Box';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function List({setList, list, todos, setTodos}: any) {



    return(
        <Box>
            <TodoForm setList={setList} list={list} todos={todos}/>
            <TodoList list={list} todos={todos} setTodos={setTodos} setList={setList} />
        </Box>
    )
}