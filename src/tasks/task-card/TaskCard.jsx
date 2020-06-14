import React from 'react';
import { Link } from 'react-router-dom'
import { getLoggedUser } from '../../core/api/users.api';
import './TaskCard.css';

const taskCardStyle = {
    maxWidth: '18rem'
}

export function TaksCard({ task, onDelete }) {

    const loggedUser = getLoggedUser();
    return (    
        <div className="taskCardStyle card text-white bg-dark m-3" style={taskCardStyle}>
            <div className="card-header">
                <h4>{task.title} </h4>
                {(loggedUser.id === task.authorId || loggedUser.isAdmin) && <Link to={`/tasks/edit/${task.id}`} > Edit </Link>}
                <div>Status: {task.isCompleted ? 
                <span className="status-completed" >Completed</span> : 
                <span className="status-active">Active</span>}</div>
            </div>
            <div className="card-time">
                <p className="card-text"> Estimated time: {task.estimatedTime} hours</p>
            </div>
            <div className="card-body">
                <p className="card-text"> {task.content}</p>
            </div>
            <div className="card-footer bg-transparent border-secondary">
                <div>Author: {task.authorName}</div>
                <div>Created on: {task.date}</div>
                {(loggedUser.id === task.authorId || loggedUser.isAdmin) && <div className="cursor-pointer text-danger" onClick={() => onDelete(task.id)}> Delete</div>}

            </div>
        </div>
    )
}