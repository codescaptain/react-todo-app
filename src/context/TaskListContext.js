import React, { createContext, useState, useEffect } from 'react'


export const TaskListContext = createContext();


const TaskListContextProvider = (props) => {

    var uniqid = require('uniqid');
    const initialState=JSON.parse(localStorage.getItem("tasks")) || [];

    const [tasks, setTasks] = useState(initialState);


    useEffect(() => {
       localStorage.setItem('tasks',JSON.stringify(tasks));
    }, [tasks])

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, { title, id: uniqid() }])

    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const clearTasks = () => {
        setTasks([]);
    }
    const findTask = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
        
       
    }
    const editTask=(title,id)=>{
        const newTask=tasks.map(task=>task.id===id ? {title,id} : task);
        setTasks(newTask);
        setEditItem(null);
    }





    return (
        <div>
            {
                <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearTasks, findTask, editItem,editTask }}>
                    {props.children}
                </TaskListContext.Provider>
            }

        </div>
    )
}

export default TaskListContextProvider;

