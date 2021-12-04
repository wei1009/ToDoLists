const form = document.querySelector("form");
const input = document.querySelector("#add-lists");
const lists = document.querySelector("#todo-lists");


lists.innerHTML =localStorage.getItem('TodoList');

function saveToLocalStorage(){

    localStorage.setItem('TodoList', document.getElementById("todo-lists").innerHTML);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTodoLi = document.createElement("li");
    const newTodoSpan = document.createElement("span")
    const rmBtn = document.createElement("button");


    rmBtn.innerText = "Remove";
    rmBtn.classList.add("rmBtn");

    newTodoLi.innerText = input.value;

    lists.appendChild(newTodoLi);
    newTodoLi.classList.add("toDoList");
    newTodoLi.appendChild(newTodoSpan);
    newTodoSpan.appendChild(rmBtn);


    saveToLocalStorage();
    form.reset();

})

lists.addEventListener("click", function (e) {
    if (e.target.className === "rmBtn") {
        e.target.closest("li").remove();
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("crossOut");


    }
    saveToLocalStorage();
})
