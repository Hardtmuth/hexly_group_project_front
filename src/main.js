import getTasks from "./getAllTasks.js";
import { createTask, deleteTask } from "./taskActions.js";

// Создать задачу
const createNewTask = async () => {
  try {
    const newTask = await createTask(taskInput.value, 'open', 1);
    console.log('Task created:', newTask);
  } catch (error) {
    console.error('Failed to create task:', error);
  }
};

const taskInput = document.querySelector('#taskInput');
const createBtn = document.querySelector('#create-btn');
createBtn.addEventListener("click", createNewTask);

// Удалить задачу
const delTask = async (id) => {
  try {
    const dTask = await deleteTask(id);
    console.log('Task deleted:', dTask);
  } catch (error) {
    console.error('Failed to delete task:', error);
  }
};

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

  const doneBtnText = document.createTextNode('Done')
  const doneBtn = document.createElement('button')
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
