const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')

let id = 3

const createTodo = todo => {
  if(todo.length) {
    todosContainer.innerHTML += `
    <li data-id="${++id}" class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i data-remove="${id}" class="far fa-trash-alt delete"></i>
    </li>`
  }
}

const addTodo = event => {
  const todo = event.target.add.value
  
  event.preventDefault()
  createTodo(todo)
  event.target.reset()
}

const removeTodo = event => { 
  const idRemove = event.target.dataset.remove
  const todo = document.querySelector(`[data-id="${idRemove}"]`)
   
  if(idRemove) {
    todo.remove()
  }
}

const addClass = (todo, className) => todo.classList.add(className)

const removeClass = (todo, className) => todo.classList.remove(className)

const hideTodos = (getTodosList, inputValue) => {
  getTodosList
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
     removeClass(todo,'d-flex')
     addClass(todo,'hidden')
    })
}

const showAllTodos = (getTodosList, inputValue) => { 
  getTodosList
    .filter(todo => todo.textContent.toLowerCase()
    .includes(inputValue)).forEach(todo => {
      removeClass(todo,'hidden')
      addClass(todo,'d-flex')
    })
}

const searchTodo = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const getTodosList =  Array.from(todosContainer.children)
 
  hideTodos(getTodosList, inputValue)
  showAllTodos(getTodosList, inputValue)
  
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
inputSearch.addEventListener('input', searchTodo)