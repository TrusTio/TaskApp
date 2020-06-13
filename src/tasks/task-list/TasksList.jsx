import React from 'react';
import { getAllTasks } from '../../core/api/tasks.api';
import { useState } from 'react';
import { useEffect } from 'react';
import { TaksCard } from '../task-card/TaskCard';

export function TasksList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then((result) => {
            setTasks(result.data);
        });
    }, [])

    return (
        <div className="tasks-list-wrapper">
            {tasks.map(task => <TaksCard task={task} key={task.id} />)}
        </div>
    );
}