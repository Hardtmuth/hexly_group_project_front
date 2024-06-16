// import axios from "axios";


const axiosInstance = axios.create({baseURL: 'http://localhost:8080'});

const createTask = async (text, status, priority) => { 
  try {
    const response = await axiosInstance.post('/task/create', { text, status, priority, });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка POST запроса на Создание задачи:'); 
    throw error; 
  }
};

const deleteTask = async (id) => { 
  try {
    const response = await axiosInstance.post('/task/change-status', { id, status: 'recycled' });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка POST запроса на Удаление задачи:'); 
    throw error; 
  }
};

const deleteRcycledTask = async (id) => { 
  try {
    const response = await axiosInstance.post('/task/remove', { id });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка POST запроса на Удаление задачи:'); 
    throw error; 
  }
};

const changeStatus = async (id, status) => { 
  try {
    const response = await axiosInstance.post('/task/change-status', { id, status, });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка POST запроса на изменение статуса задачи:'); 
    throw error; 
  }
};

const delAllTasks = async () => { 
  try {
    const response = await axiosInstance.post('/clean-cart');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка POST запроса на изменение статуса задачи:'); 
    throw error; 
  }
};

export { createTask, deleteTask, changeStatus, deleteRcycledTask, delAllTasks };
