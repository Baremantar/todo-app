import TextField from '@mui/material/TextField';
import { stringify } from 'querystring';
// import Box from '@mui/material/Box';
import React, { useRef } from 'react';

interface TodoFormProps {
  handle: string
}
const handle = event.preventDefault();

export default function TodoForm(event: React.FormEvent<HTMLFormElement>) {

  return (
    <form className="Form" onSubmit={() => handle(event)}>
      <TextField id="standard-basic" label="Standard" variant="standard" placeholder='Write job' />
      <input type="submit" />
      <label htmlFor=""></label>
    </form>
  );
}