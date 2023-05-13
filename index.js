const addInput = document.getElementById("add-input");

const todoInput = document.getElementById("todo-input");

const newList = document.getElementById("new-list");

const taskContainer = document.getElementById("task-container");

todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let newList = document.createElement("div");
    let inputText = document.createElement("p");
    inputText.innerText = todoInput.value;
    newList.appendChild(inputText);
    todoInput.value = "";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    newList.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      newList.innerHTML = "";
    });

    let doneButton = document.createElement("button");
    doneButton.innerText = "DONE";
    newList.appendChild(doneButton);
    doneButton.addEventListener("click", function () {
      doneButton.parentElement.style.textDecoration = "line-through";
    });

    taskContainer.appendChild(newList);
  }
});

addInput.addEventListener("click", function () {
  let newList = document.createElement("div");
  let inputText = document.createElement("p");
  inputText.innerText = todoInput.value;
  newList.appendChild(inputText);
  todoInput.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  newList.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    newList.innerHTML = "";
  });

  let doneButton = document.createElement("button");
  doneButton.innerText = "DONE";
  newList.appendChild(doneButton);
  doneButton.addEventListener("click", function () {
    doneButton.parentElement.style.textDecoration = "line-through";
  });

  taskContainer.appendChild(newList);
});
