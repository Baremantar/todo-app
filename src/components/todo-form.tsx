import TextField from '@mui/material/TextField';
import React from 'react';



export default function TodoForm({setList, list}: any) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const objData ={
      name : event.currentTarget.job.value,
      id: list.length, 
      key: list.length, 
    }
    list.push(objData);
    setList([...list]);
    event.currentTarget.job.value='';
  }

  

  return (
    <form className="Form" onSubmit={(event) => handleSubmit(event)}>
      <TextField id="standard-basic" name="job" label="Standard" variant="standard" placeholder='Write job' />
      <input type="submit" />
      <label htmlFor=""></label>
    </form>
  );
}