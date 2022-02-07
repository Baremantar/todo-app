import TextField from '@mui/material/TextField';
import React from 'react';



export default function TodoForm({setList, list}: any) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const objData ={
      name : event.currentTarget.job.value,
      id: list.length, 
      key: list.length, 
      isDone: false,
    }
    list.filter((item: any) => item.isActive === true)[0].todos.push(objData);
    setList([...list]);
    
  }

  return (
    <form className="Form" onSubmit={(event) => handleSubmit(event)}>
      <TextField id="standard-basic" name="job" label="Add todo" variant="standard"/>
      <input type="submit"/>
      <label htmlFor=""></label>
    </form>
  );
}