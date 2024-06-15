import getTasks from "./getAllTasks.js";
import { createTask, deleteTask, changeStatus } from "./taskActions.js";

const getPriority = () => {
  const priorityText = document.querySelector('#priorityMenu').textContent;
  switch (priorityText) {
    case 'High': return 3;
    case 'Medium': return 2;
    case 'Low': return 1;
    default: return 1;
  }
};

// Создать задачу
const createNewTask = async () => {
  try {
    const newTask = await createTask(taskInput.value, 'open', getPriority());
    console.log('Task created:', newTask);
    window.location.reload();
  } catch (error) {
    console.error('Failed to create task:', error);
  }
};

const taskInput = document.querySelector('#taskInput');
const createBtn = document.querySelector('#create-btn');
createBtn.addEventListener("click", createNewTask);

// Выбор приоритета
const highPriority = document.querySelector('#highPriority');
highPriority.addEventListener("click", async () => {  
  const priorityMenu = document.querySelector('#priorityMenu');
  priorityMenu.textContent = 'High';
  priorityMenu.classList.remove('btn-outline-secondary', 'text-bg-success','text-bg-primary');
  priorityMenu.classList.add('text-bg-danger');
});
const mediumPriority = document.querySelector('#mediumPriority');
mediumPriority.addEventListener("click", async () => {  
  const priorityMenu = document.querySelector('#priorityMenu');
  priorityMenu.textContent = 'Medium';
  priorityMenu.classList.remove('btn-outline-secondary', 'text-bg-danger','text-bg-primary');
  priorityMenu.classList.add('text-bg-success');
});
const lowPriority = document.querySelector('#lowPriority');
lowPriority.addEventListener("click", async () => {  
  const priorityMenu = document.querySelector('#priorityMenu');
  priorityMenu.textContent = 'Low';
  priorityMenu.classList.remove('btn-outline-secondary', 'text-bg-danger','text-bg-success');
  priorityMenu.classList.add('text-bg-primary');
});

// Удалить задачу
const delTask = async (id) => {
  try {
    const dTask = await deleteTask(id);
    console.log('Task deleted:', dTask);
  } catch (error) {
    console.error('Failed to delete task:', error);
  }
};

// Изменить статус задачи 
const chenStatus = async (id, status) => {
  try {
  const chStat = await changeStatus(id, status);
  console.log('Status chenge:', chStat);
  } catch (error) {
    console.log('Failed to chenge status:', error);
  }
}

// Отображаем список задач
const allTasks = await getTasks();

const renderTask = (someTask) => {
  const taskList = document.querySelector('#task-list');

  const textTask = document.createTextNode(someTask.text);
  const textSpan = document.createElement('span');
  textSpan.className = "me-2";
  textSpan.append(textTask);

  const priorityTask = document.createTextNode(someTask.priority);
  const prioritySpan = document.createElement('span');
  prioritySpan.className = "badge bg-danger rounded-pill";
  prioritySpan.append(priorityTask);

  const firstDiv = document.createElement('div');
  firstDiv.className = "w-50 flex-grow-1";
  firstDiv.append(textSpan);
  firstDiv.append(prioritySpan);

  const doneBtnText = document.createTextNode('Done');
  const doneBtn = document.createElement('button');
  doneBtn.addEventListener("click", () => {
    chenStatus(someTask.id, 'closed');
    window.location.reload();
  });
  doneBtn.type = 'button';
  doneBtn.className = "btn btn-outline-success me-2";
  doneBtn.append(doneBtnText);

  const delBtnText = document.createTextNode('Delete')
  const delBtn = document.createElement('button')
  delBtn.addEventListener("click", () => {
    delTask(someTask.id);
    window.location.reload();
  });
  delBtn.type = 'button';
  delBtn.className = "btn btn-outline-danger";
  delBtn.append(delBtnText);

  const secondDiv = document.createElement('div');
  secondDiv.append(doneBtn);
  secondDiv.append(delBtn);

  const listItem = document.createElement('li');
  listItem.className = "list-group-item d-flex align-items-center";
  listItem.append(firstDiv);
  listItem.append(secondDiv);

  taskList.append(listItem);
};

allTasks.tasks.forEach(renderTask);
