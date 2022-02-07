import AddList from "./AddList";
import ShowLists from "./ShowLists";
import Box from '@mui/material/Box';



export default function GlobalList({setList, list, handleDispatchTodos}: any) {
  return (
    <Box>
      <ShowLists list={list} setList={setList} handleDispatchTodos={handleDispatchTodos}/>
      <AddList setList={setList} list={list}/>
    </Box>
    );
}
