import React from 'react';

export default function TodoList({ list }: any) {
  return (
    <ul className="list">
      {list ? list.map((item: any) => {
         return (
          <li key={item.id}>
            <label>
              <span>{item.name}</span>
              <input type="checkbox" />
            </label>
          </li>
        );
      }) : <></>}
    </ul>
  );
}