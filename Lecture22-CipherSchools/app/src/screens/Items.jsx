import React from 'react';
import Item from './Item';

function Items({ todoItems, setTodoItems }) {
  const handleDelete = (indexToDelete) => {
    const updatedItems = todoItems.filter((item, index) => index !== indexToDelete);
    setTodoItems(updatedItems);
  };

  return (
    <div className="w-full flex flex-col justify-between border gap-x-2 gap-y-2 mt-8">
      {todoItems.map((item, index) => (
        <div className="w-full flex flex-row justify-between border gap-x-4 items-center" key={index}>
          <Item todoName={item.item} todoDate={item.date} />
          <div>
            <button
              className="text-2xl bg-red-600 p-2 rounded-lg text-white h-12"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;