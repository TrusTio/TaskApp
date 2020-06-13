import React from 'react';
import { Link } from 'react-router-dom'
import { getLoggedUser } from '../../core/api/users.api';

const taskCardStyle = {
    maxWidth: '18rem'
}
export function TaksCard({ task, onDelete }) {

    const loggedUser = getLoggedUser();
    return (
        <div className="card text-white bg-dark mb-3" style={taskCardStyle}>
            <div className="card-header">
                {task.title}
                {(loggedUser.id === task.authorId || loggedUser.isAdmin) && <Link to={`/tasks/edit/${task.id}`} > Edit </Link>}
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