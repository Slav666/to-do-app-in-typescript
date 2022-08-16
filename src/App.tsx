import React, { FC, ChangeEvent, useState} from 'react';
import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import {ITask} from './Interfaces'



const App: FC = () => {
const [items, setItems] = useState<ITask[]>([
    {
      id: 1,
      checked: false,
      item: "Car",
    },
    {
      id: 2,
      checked: false,
      item: "Bike",
    },
    {
      id: 3,
      checked: true,
      item: "Tank",
    },
    {
      id: 4,
      checked: false,
      item: "Car",
    },
    
  ]);
  
const [newItem, setNewItem] = useState<string> ("")

   const handleChecked = (id: number): void => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id: number): void => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    console.log(e);
  };

const addItem = (item: string) => {
    const id = item.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  return (
    <div className="App">
      <Header/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items.filter((item) => item.item.toLowerCase()
        )}
        handleChecked={handleChecked}
        handleDelete={handleDelete} 
        />
    </div>
  );
}

export default App;
