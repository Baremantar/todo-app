import React from "react";

export default function TodoList({ list, todos, setList, setTodos }: any) {
  
  function addActive(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  event.preventDefault();
  
  // console.log(list.filter((item: any)=> item.isActive == true)[0].todos.filter((item: any) => event.currentTarget.name))
  // console.log(event.currentTarget.id)
  }

  return (
    <ul className="list">
      {todos ? 
        todos.map((item: any) => {
          return (
            <li key={item.id}>
              <label>
                <span className={item.isDone ? "active" : undefined}>{item.name}</span>
                <button onClick={(event) => addActive(event)}>X</button>
              </label>
            </li>
          );
        }) : <></>}
    </ul>
  );
}
