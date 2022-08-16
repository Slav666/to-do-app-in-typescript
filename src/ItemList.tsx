import React from 'react'
import LineItem from "./LineItem";
import { ITask } from './Interfaces';

interface Props {
  items: ITask[]
  handleChecked(id: number): void
  handleDelete(id: number): void

}
const itemList = ({ items, handleChecked, handleDelete }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete} 
          items={items}       
           />
      ))}
    </ul>
  );
};

export default itemList;
