import TextField from '@mui/material/TextField';
import { stringify } from 'querystring';
// import Box from '@mui/material/Box';
import React, { useEffect } from 'react';



export default function TodoForm() {
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    var props = event.currentTarget.job.value
    props = ''


    

  }
  

  return (
    <form className="Form" onSubmit={(event) => handleSubmit(event)}>
      <TextField id="standard-basic" name="job" label="Standard" variant="standard" placeholder='Write job' />
      <input type="submit" />
      <label htmlFor=""></label>
    </form>
  );
}