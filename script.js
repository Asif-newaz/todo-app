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
const completeUL = document.querySelector(".complete-list ul");

const createTask = (task) => {
  const listItem = createElement("li");
  const checkBox = createElement("checkbox");
  const label = createElement("label");

  checkBox.type = "input";
  label.innerText = task;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

const addTask = (event) => {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  
};
