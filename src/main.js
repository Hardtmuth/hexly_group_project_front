import getTasks from "./getAllTasks.js";


const allTasks = await getTasks();
console.log(allTasks.tasks);

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');

const tempTask = {
  text: 'Купить молоко',
  status: "open",
  priority: 1
}

const renderTask = (someTask) => {
  const taskList = document.querySelector('#task-list');

  const textTask = document.createTextNode(someTask.text);
  const textSpan = document.createElement('span');
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
  doneBtn.className = "btn btn-outline-success";
  doneBtn.append(doneBtnText);

  const delBtnText = document.createTextNode('Delete')
  const delBtn = document.createElement('button')
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

renderTask(tempTask);

allTasks.tasks.forEach(renderTask)

/* form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value;

    const taskHTML = `<li class="list-group-item d-flex align-items-center">
    <div class="w-50 flex-grow-1">
      <span class="">${taskText}</span>
      <span class="badge bg-danger rounded-pill">High priority</span>
    </div>
    <div>
      <button type="button" class="btn btn-outline-success" disabled>Done</button>
      <button type="button" class="btn btn-outline-danger" disabled>Delete</button>
    </div>
  </li>`;



  console.log(taskHTML);
}) */