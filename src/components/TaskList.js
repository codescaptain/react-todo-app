import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';


const TaskList = () => {
    const {tasks}=useContext(TaskListContext);
    return (
        <div>
        {
            tasks.length ? (
                <ul className="item">
         {
             tasks.map((task)=>(
              <Task key={task.id} task={task}/>
             ))
         }
        </ul>
            ): (<div className="no-tasks"> No tasks </div>)
        }
        
        </div>
    )
}

export default TaskList
