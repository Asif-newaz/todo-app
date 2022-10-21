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
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

let createTask = (task) => {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("checkbox");
  let label = document.createElement("label");

  checkBox.type = "input";
  label.innerText = task;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = (event) => {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";

  // bind the new list item to the incomplete list
  bindIncompleteItems(listItem, completeTask);
};

let completeTask = () => {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = () => {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindIncompleteItems = (taskItem, checkboxClick) => {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = (taskItem, deleteButtonClick) => {
  let deleteBtn = taskItem.querySelector("delete");
  deleteBtn.onclick = deleteButtonClick;
};

form.addEventListener("submit", addTask);
