import TextField from '@mui/material/TextField';
import React from 'react';




export default function AddList({setList, list}: any) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newList = {
      name: event.currentTarget.list.value,
      todos: [],
      isActive: false,
      key: list.length,
    }
    console.log(list.filter((newList: any) => newList.name === event.currentTarget.list.value).length)
    if(newList.name != '' && list.filter((item: any) => newList.name === item.name).length == 0){
      
      list.push(newList);
      setList([...list]);
      
      event.currentTarget.list.value='';
    }
  }

  return (
    <form className="add-list" onSubmit={(event) => handleSubmit(event)}>
    <TextField id="standard-basic" name="list" label="New list" variant="standard" />
    <input className="add-list-item" type="submit" />
  </form>
  );
}