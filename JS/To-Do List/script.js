// DOM Elements
const taskInput = document.getElementById("task");
const dueDateInput = document.getElementById("dueDate");
const addButton = document.getElementById("add-btn"); // Make sure the ID matches HTML
const taskList = document.getElementById("task-list");
const themeButton = document.getElementById("theme-btn");
const clearAllButton = document.getElementById("clear-all-btn");
const searchInput = document.getElementById("search");
const priorityInput = document.getElementById("priority");

// Array to store tasks
let tasks = [];

// Load tasks on page load
window.addEventListener("load", () => {
  loadTasks();
  renderTasks();
});

// ✅ Add Event Listeners Properly
addButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", clearAllTasks);
themeButton.addEventListener("click", toggleTheme);

taskList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  const index = parseInt(li.dataset.index);

  if (event.target.classList.contains("complete-btn")) {
    toggleComplete(index);
  } else if (event.target.classList.contains("delete-btn")) {
    deleteTask(index);
  }
});

// Add Task Function ✅
function addTask() {
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;

  if (taskText === "" || dueDate === "") {
    alert("Please enter both task and due date.");
    return;
  }

  const task = {
    text: taskText,
    dueDate: new Date(dueDate),
    priority: priority,
    completed: false,
  };

  tasks.push(task);
  saveTasks();
  renderTasks();

  // Clear input fields
  taskInput.value = "";
  dueDateInput.value = "";
}

// Render Tasks ✅
function renderTasks(filteredTasks = tasks) {
  taskList.innerHTML = "";

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.classList.add(task.priority);

    if (task.completed) {
      li.classList.add("completed");
    }

    const now = new Date();
    if (now > task.dueDate && !task.completed) {
      li.classList.add("overdue");
    }

    li.innerHTML = `
      <span>${task.text} (Due: ${task.dueDate.toDateString()})</span>
      <div>
        <button class="complete-btn">✔️</button>
        <button class="delete-btn">❌</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Toggle Task Completion ✅
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete Task ✅
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Clear All Tasks ✅
function clearAllTasks() {
  tasks = [];
  saveTasks();
  renderTasks();
}

// Toggle Theme ✅
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.querySelector(".content").classList.toggle("dark");
}

// Save Tasks to Local Storage ✅
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks from Local Storage ✅
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

// Search and Filter Tasks ✅
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm)
  );
  renderTasks(filteredTasks);
});
