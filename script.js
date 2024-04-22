const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
  const newTodoText = newTodoInput.value.trim(); // Trim whitespace
  if (newTodoText) {
    const newTodoItem = document.createElement('li');
    newTodoItem.innerText = newTodoText;
    todoList.appendChild(newTodoItem);
    newTodoInput.value = ''; // Clear input field after adding
  }
});
