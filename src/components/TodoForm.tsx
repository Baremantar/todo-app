import TextField from '@mui/material/TextField';
import React from 'react';

export default function TodoForm({setList, list, todos}: any) {
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const objData ={
      name : event.currentTarget.job.value,
      id: todos.length, 
      key: todos.length,  
      isDone: false,
    }
    list.filter((item: any) => item.isActive === true)[0].todos.push(objData);
    setList([...list]);
    event.currentTarget.list.value='';
  }

  return (
    <form className="add-todo" onSubmit={(event) => handleSubmit(event)}>
      <TextField id="standard-basic" name="job" label="Add todo" variant="standard"/>
      <input className="add-todo-item" type="submit"/>
      <label htmlFor=""></label>
    </form>
  );
}