import React, {ChangeEvent} from 'react';
import { ITask } from './Interfaces';

interface Props {
  newItem: string
  setNewItem: any
  handleSubmit(e: ChangeEvent<HTMLFormElement>): void

}

const AddItem= ({ newItem, setNewItem, handleSubmit }: Props) => {
  console.log('setNewItem',setNewItem)
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        Add Task
      </button>
    </form>
  );
};

export default AddItem;
