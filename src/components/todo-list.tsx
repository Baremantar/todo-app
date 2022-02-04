import React from 'react';

export default function TodoList({ list }: any) {
  return (
    <ul className="listjye">
      {list ? list.map((item: any) => {
        
        console.log(item.id)
         return (
          <li key={item.id}>
            <label>
              <span>{item.text}</span>
              <input type="checkbox" />
            </label>
          </li>
        );
      }) : <></>}
    </ul>
  );
}