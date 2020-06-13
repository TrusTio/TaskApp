import React from 'react';
import './TaskEdit.css'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTaskById, saveTask } from '../../core/api/tasks.api';

export function TaskEdit(props) {

    const [currentTask, setCurrentTask] = useState({ title: '', content: '', authorId: '', authorName: '', date: '', estimatedTime: '' });
    const [shouldRedirect, setShouldRedirect] = useState(false);


    useEffect(() => {
        if (props.computedMatch.params.id) {
            getTaskById(props.computedMatch.params.id).then((result) => {
                setCurrentTask(result.data);
            });
        }
    }, [props.computedMatch.params.id])

    const onInputChange = (event) => {
        event.persist();

        setCurrentTask((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onTaskSubmit = (event) => {
        event.preventDefault();
        saveTask(currentTask).then(() => {
            setShouldRedirect(true);
        })
            .catch((err) => console.error(err));
    }
    return (
        <>
            {shouldRedirect && <Redirect to="/tasks" />}
            <div className="task-edit-wrapper">
                <form className="task-edit-form" onSubmit={onTaskSubmit} >
                    <div className="form-group">
                        <label labelfor="title">Title: </label>
                        <input className="form-control" type="text" id="title" name="title" onChange={onInputChange} value={currentTask.title} required />
                    </div>
                    <div className="form-group">
                        <label labelfor="content">Content: </label>
                        <textarea className="form-control" id="content" name="content" onChange={onInputChange} value={currentTask.content} required/>
                    </div>
                    <div className="form-group">
                        <label labelfor="estimatedTime">Estimated time(in hours): </label>
                        <input className="form-control" type="number" min="1" id="estimatedTime" name="estimatedTime" onChange={onInputChange} value={currentTask.estimatedTime} required />
                    </div>
                    <div>
                        <button className="btn btn-primary">Save task</button>
                    </div>
                </form>
            </div>
        </>
    )
}