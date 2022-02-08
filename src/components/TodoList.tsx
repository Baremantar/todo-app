import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function TodoList({ list, todos, setList, setTodos,}: any) {
  
  const [checked, setChecked] = useState([true, false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[1], event.target.checked]);
  };

  
  function addActive(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) {
    event.preventDefault();
    
    list.filter((item: any)=> item.isActive == true)[0].todos[index].isDone = true;
    setList([...list]);

}
  
  return (
  <>
  <FormControlLabel
        label="Done ?"
        control={<Checkbox checked={checked[1]} onChange={handleChange} />}
      />
    <ul className="list">
      {
          todos ? checked[0] ?
          
          todos.map((item: any, index: number) => {
              return (
                <li key={item.id}>
                  <label>
                    <span className={item.isDone ? "active" : undefined}>{item.name}</span>
                    <button onClick={(event) => addActive(event, index)}>X</button>
                  </label>
                </li>
              );        
          }) : <>
          </>:<>{
        todos.filter((item: any) => item.isDone == true).todos.map((item: any, index: number) => {
              return (
                <li key={item.id}>
                  <label>
                    <span className={item.isDone ? "active" : undefined}>{item.name}</span>
                    <button onClick={(event) => addActive(event, index)}>x</button>
                  </label>
                </li>
              );        
          })}</>}
    </ul>
  </>
  );
}

