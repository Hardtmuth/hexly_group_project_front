import axios from "axios";

const axiosInstance = axios.create({baseURL: 'http://localhost:8080'});


const createTask = async (text, status, priority) => { 
  try {
    const response = await axiosInstance.post('/task/create', { text, status, priority, });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при выполнении POST запроса:'); 
    throw error; 
  }
};

const createNewTask = async () => {
  try {
    const newTask = await createTask('Купить молоко', 'open', 1);
    console.log('Task created:', newTask);
  } catch (error) {
    console.error('Failed to create task:', error);
  }
};

createNewTask();

export {createTask};
