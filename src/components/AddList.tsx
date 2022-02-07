import TextField from '@mui/material/TextField';
import React from 'react';




export default function AddList({setList, list}: any) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newList = {
      name: event.currentTarget.list.value,
      todos: [],
      isActive: false
    }
    if(newList.name != ''){
      list.push(newList);
      setList([...list]);
      event.currentTarget.list.value='';
    }
  }

  return (
    <form className="global-list" onSubmit={(event) => handleSubmit(event)}>
    <TextField id="standard-basic" name="list" label="New list" variant="standard" />
    <input type="submit" />
  </form>
  );
}