// const childrenOne = document.querySelector(".item");

// const childrenTwo = childrenOne.previousElementSibling;

// childrenTwo.style.color = "crimson";

// console.log(childrenTwo);

const divElement = document.createElement("div");
divElement.className = "container";
divElement.setAttribute("id", "box");

const container = document.querySelector(".todo-list");
// const h2Element = container.querySelector("h2");
// container.insertBefore(divElement, h2Element);
// container.appendChild(divElement);
container.append(divElement, document.createElement("p"), "Hello world!");
