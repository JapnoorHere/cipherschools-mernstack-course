import React, { useState } from 'react'
import AppName from './AppName';
import AddItem from './AddItem';
import Items from './Items';

function TodoScreen() {
  const [todoItems,setTodoItems]=useState([
    {item:"Buy Milk",date:"4/10/2023"},
    {item:"Buy Tea",date:"5/10/2023"},
    {item:"Buy Chicken",date:"20/10/2023"},
  ]);
  return (
    <div className='w-[80%] border flex items-center flex-col m-auto'>
      <AppName></AppName>
      <AddItem setTodoItems={setTodoItems} todoItems={todoItems} ></AddItem>
      <Items setTodoItems={setTodoItems} todoItems={todoItems} ></Items> 
    </div> 
  )
}

export default TodoScreen