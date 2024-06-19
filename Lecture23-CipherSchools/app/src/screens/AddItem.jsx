
import React, { useRef } from 'react';

function AddItem({ setTodoItems, todoItems }) {
  const itmRef = useRef(null);
  const datRef = useRef(null);

  return (
    <div className="w-full flex flex-row justify-between border gap-x-4 gap-y-2">
      <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="item" 
        type="text" 
        placeholder="Add New Item" 
        ref={itmRef}
      />
      <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="date" 
        type="date" 
        ref={datRef}
      />
      <button 
        className='text-2xl bg-green-600 p-2 rounded-lg text-white h-12'
        onClick={() => {
          const itm = itmRef.current.value;
          const dat = datRef.current.value;
          if (itm !== "" && dat !== "") {
            setTodoItems([...todoItems, { item: itm, date: dat }]);
            // Clear the inputs
            itmRef.current.value = "";
            datRef.current.value = "";
          } else {
            alert("Please fill out both fields.");
          }
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddItem;
