import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {

    const { removeTask, findTask } = useContext(TaskListContext);
    const removeHandle = (e) => {
        removeTask(task.id)
    }
    const ahmet=()=>{
        findTask(task.id)
    }
 


    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button onClick={removeHandle} type="button" className="btn-delete task-btn">
                    <i className="fa fa-trash-alt" aria-hidden="true"></i>
                </button>

                <button onClick={ahmet} type="button" className="btn-edit task-btn">
                    <i className="fas fa-pen" aria-hidden="true"></i>
                </button>
            </div>


        </li>
    )
}

export default Task;
