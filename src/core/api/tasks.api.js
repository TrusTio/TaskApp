import axios from 'axios';
import { getLoggedUser } from './users.api';

const apiUrl = 'http://localhost:3005';

export function getAllTasks(){
    return axios.get(`${apiUrl}/tasks`);
}

export function saveTask(taskData){
    const loggedUser = getLoggedUser();

    if(taskData.id){
        return axios.put(`${apiUrl}/tasks/${taskData.id}`, taskData)
    }

    taskData.authorId = loggedUser.id;
    taskData.authorName = loggedUser.name;
    taskData.date = new Date();

    return axios.post(`${apiUrl}/tasks`, taskData);
}

export function getTaskById(id){
    return axios.get(`${apiUrl}/tasks/${id}`);
}