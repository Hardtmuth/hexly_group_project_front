const axiosInstance = axios.create({baseURL: 'http://localhost:8080'});

const getAllTasks =  async (text, status, priority) => {
  try {
    const response = await axiosInstance.get('/tasks');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при выполнении GET запроса:'); 
    throw error; 
  }
};

const getDeletedTasks =  async (text, status, priority) => {
  try {
    const response = await axiosInstance.get('/deleted-tasks');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при выполнении GET запроса:'); 
    throw error; 
  }
};

export { getAllTasks, getDeletedTasks };
