const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const resetListButton = document.getElementById('resetListButton');
const taskList = document.getElementById('taskList');
const counterDisplay = document.getElementById('counter');

let completedTasks = 0;

addTaskButton.addEventListener('click', function(){
  const taskText = taskInput.value;
  
  if (taskText){
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.addEventListener('click', function(){
    listItem.classList.toggle('completed');
    completedTasks += listItem.classList.contains('completed') ? 1: -1;
    updateCounter();
  });
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});

resetListButton.addEventListener('click', function(){
  taskList.replaceChildren(); 
  completedTasks = 0;
  updateCounter();
});

function updateCounter(){
  counterDisplay.textContent = `Tasks Completed: ${completedTasks}`;
}