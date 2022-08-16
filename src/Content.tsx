import React from 'react'
import ItemList from "./ItemList";
import { ITask } from './Interfaces';

interface Props {
  items: ITask[]
  handleChecked(id: number): void
  handleDelete(id: number): void
 
}
const Content = ({ items, handleChecked, handleDelete }: Props) => {
  console.log(items)
  return (
    <main>
      <p>List</p>
      <ItemList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}   
        
      />
    </main>
  );
};

export default Content;
