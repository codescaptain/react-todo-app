import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext';



const TaskForm = () => {
    const [title, setTitle] = useState('');
    const { addTask, clearTasks, editItem,editTask } = useContext(TaskListContext)


    const handleChange = (e) => {
        setTitle(e.target.value);


    }
    const submitHandle = (e) => {
        e.preventDefault();
        if (editItem === null){
            addTask(title);
            setTitle("");}
        else{
            editTask(title,editItem.id)
        }

       
    }

    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title)
            console.log(editItem);
        } else { setTitle("") }

    }, [editItem])

    return (

        <form onSubmit={submitHandle} className="form">
            <input
                type="text"
                className="task-input"
                placeholder="Add Task"
                onChange={handleChange}
                name={title}
                value={title}

            />

            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem===null ? "Add Task" : "Edit Task"}
          </button>
                <button onClick={clearTasks} className="btn clear-btn">
                    Clear
          </button>

            </div>


        </form>
    )
}

export default TaskForm
