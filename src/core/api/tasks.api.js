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

export function deleteTask(id){
    return axios.delete(`${apiUrl}/tasks/${id}`);
}

export async function getNotesByAuthorId(authorId) {
    const allTasks = (await getAllTasks()).data;

    return allTasks.filter(task => task.authorId === authorId);
}

export async function deleteTasksForAuthor(authorId) {
    const tasks = await getNotesByAuthorId(authorId);

    tasks.forEach(task => {
        deleteTask(task.id);
    });
}
