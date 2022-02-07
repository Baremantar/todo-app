import React from "react";

export default function TodoList({ list, todos, setTodos }: any) {
  return (
    <ul className="list">
      {todos ? 
        todos.map((item: any) => {
          return (
            <li key={item.id}>
              <label>
                <span>{item.name}</span>
                <button>X</button>
              </label>
            </li>
          );
        }) : <></>}
    </ul>
  );
}
