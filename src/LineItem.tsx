import React from 'react'
import { ITask } from './Interfaces';


interface Props {
  items: ITask[]
  handleChecked(id: number): void
  handleDelete(id: number): void
  item: any
}
const LineItem = ({ handleChecked, handleDelete, item }: Props) => {
  console.log('item',item.id)
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleChecked(item.id)}
        checked={item.checked}
      />
      {item.item}
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
};

export default LineItem;
