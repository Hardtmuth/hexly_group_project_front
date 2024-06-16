import { getDeletedTasks } from './getTasks.js';
import { deleteRcycledTask, delAllTasks } from './taskActions.js';

const getTextPriority = (prior) => {
  switch (prior) {
    case 3: return 'High';
    case 2: return 'Medium';
    default: return 'Low';
  }
};

// Удалить задачу из БД
const delTask = async (id) => {
  try {
    const dTask = await deleteRcycledTask(id);
    console.log('Task deleted:', dTask);
  } catch (error) {
    console.error('Failed to delete task:', error);
  }
};

// Удалить все задачи из кодрзины
const removeAllBtn = document.querySelector('#remove-all');
removeAllBtn.addEventListener('click', () => {
  delAllTasks();
  window.location.reload();
});

const deletedTasks = await getDeletedTasks();

const renderDeletedTask = (someTask) => {
  const taskList = document.querySelector('#cart');

  const textTask = document.createTextNode(someTask.text);
  const textSpan = document.createElement('span');
  textSpan.className = 'me-2';
  textSpan.append(textTask);

  const priorityTask = document.createTextNode(getTextPriority(someTask.priority));
  const prioritySpan = document.createElement('span');
  if (someTask.priority === 3) {
    prioritySpan.className = 'badge bg-danger rounded-pill';
  } else if (someTask.priority === 2) {
    prioritySpan.className = 'badge bg-success rounded-pill';
  } else {
    prioritySpan.className = 'badge bg-primary rounded-pill';
  }
  prioritySpan.append(priorityTask);

  const firstDiv = document.createElement('div');
  firstDiv.className = 'w-50 flex-grow-1';
  firstDiv.append(textSpan);
  firstDiv.append(prioritySpan);

  const delBtnText = document.createTextNode('Delete');
  const delBtn = document.createElement('button');
  delBtn.addEventListener('click', () => {
    delTask(someTask.id);
    window.location.reload();
  });
  delBtn.type = 'button';
  delBtn.className = 'btn btn-outline-danger';
  delBtn.append(delBtnText);

  const secondDiv = document.createElement('div');
  secondDiv.append(delBtn);

  const listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex align-items-center';
  listItem.append(firstDiv);
  listItem.append(secondDiv);

  taskList.append(listItem);
};

deletedTasks.tasks.forEach(renderDeletedTask);
