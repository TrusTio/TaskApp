import React from 'react';
import { getAllTasks, deleteTask } from '../../core/api/tasks.api';
import { useState } from 'react';
import { useEffect } from 'react';
import { TaksCard } from '../task-card/TaskCard';

const listStyle ={
  margin: '6px',
  flexWrap: 'wrap'
}
export function TasksList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then((result) => {
            setTasks(result.data);
        });
    }, [])

    const onTaskDelete = (id) =>{
        deleteTask(id).then(()=>{
          setTasks((prevState)=> {
            return prevState.filter(t => t.id !== id);
          })
        })
        .catch((err) => console.error(err));
      }

    return (
        <div className="tasks-list-wrapper d-flex" style={listStyle}>
            {tasks.map(task => <TaksCard task={task} key={task.id} onDelete={onTaskDelete} />)}
        </div>
    );
}