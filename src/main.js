import {createTask} from "./axios.js";

const axiosInstance = axios.create({baseURL: 'http://localhost:8080'});
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value;

    const response = createTask(taskText, 'open', 1);
    console.log(response);

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
})