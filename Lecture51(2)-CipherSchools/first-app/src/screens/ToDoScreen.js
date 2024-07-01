// import { Component } from "react";

//using hook
import { useState, useEffect } from "react"
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import {addTask, getTaskForCurrectUser } from "../api/task-api";



const ToDoScreen = () => {

    const [taskList, setTaskList] = useState([]);
    const fetchTasks= async ()=>{
        const tasks= await getTaskForCurrectUser();
        // setTaskList({...tasks})
        setTaskList(tasks)
    }
    useEffect(()=>{
        fetchTasks();
    },[])
    // to do this we will need two way binding
    // 2. we have created this function which will handle the value types or user input and we will pass it into AddTaask component below as a prop 
    let addNewTask= async (task)=>{
        try{
            await addTask({...task})
            setTaskList([...taskList,{
                ...task, isComplete: false,
            }])
        } catch(err){
            console.error(err);
        }
        // setTaskList([...taskList,{...task, createdDate: new Date()}]);
    };


    return (
        <>
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>

            <div>
                <section>

                <div className="ui cards">
{/* key is used when map isnused so that recat DOM knows that which objectis being changed */}
{/* so key is a unique identifier which is going to help react to identify elements whenever necessary */}
                    {taskList.map((task,index) => 
                    <Task task={task} key={index}/>)}
                </div>
                </section>
            </div>
        {/*3 here we have passed the addNewTask as a prop so that we can have a communcation between the card and user input  */}
        <AddTask onSubmit={addNewTask} validator ={({title, description}) =>{
            if(title?.length && !title.includes("\n") && description?.length) {
                console.log(`Is Valid`);
                return true;
            } else{
                console.log(`Invalid`);
                return false;
            }
        }}/>
        </div>
        </>
    );
}

export default ToDoScreen;