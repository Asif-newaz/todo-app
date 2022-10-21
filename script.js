// const childrenOne = document.querySelector(".item");

// const childrenTwo = childrenOne.previousElementSibling;

// childrenTwo.style.color = "crimson";

// console.log(childrenTwo);

// const divElement = document.createElement("div");
// divElement.className = "container";
// divElement.setAttribute("id", "box");

// const container = document.querySelector(".todo-list");
// const h2Element = container.querySelector("h2");
// container.insertBefore(divElement, h2Element);
// container.appendChild(divElement);
// container.append(divElement, document.createElement("p"), "Hello world!");
// const headerElement = document.querySelector("#header");

// headerElement.addEventListener("mouseover", (event) => {
//   console.log(event);
// });
// ---The end---

// Select elements and them to variables
const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");

// functions
const createTask = function (task) {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

const addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
};

const completeTask = function () {
  const listItem = this.parentNode;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  const checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
};

const bindInCompleteItems = function (taskItem, checkboxClick) {
  const checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

const bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonClick;
};

for (const i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}

for (const i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
