import React from 'react';
import { Link } from 'react-router-dom'

const taskCardStyle = {
    maxWidth: '18rem'
}
export function TaksCard({ task }) {

    return (
        <div className="card text-white bg-dark mb-3" style={taskCardStyle}>
            <div className="card-header">
                {task.title}
                <Link to={`/tasks/edit/${task.id}`} > Edit </Link>
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
            </div>
        </div>
    )
}