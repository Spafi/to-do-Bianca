// Access elements from the HTML using their ID.
// The variables are named according to the elements they correspond to.
const toDoInput = document.getElementById('add-todo-input'); // Input box for adding new todos.
const addTodoButton = document.getElementById('add-todo-button'); // Button for adding new todos.
const inProgressTodoContainer = document.getElementById(
    'in-progress-todo-container'
); // Container where in-progress todos are displayed.

// Define arrays to keep track of both in-progress and completed todos.
let inProgressToDoList = [];
let completedToDoList = [];

// Function to add a new todo to the in-progress list.
// This function is called when the addTodoButton is clicked.
function addToDo() {
    inProgressToDoList.push(toDoInput.value); // The input value is added to the in-progress list.
    displayInProgressToDoList(inProgressToDoList); // The updated list is displayed.
}

// Function to mark a todo as complete.
// This removes the todo from the in-progress list and adds it to the completed list.
function completeTodo(toDoValue) {
    // The in-progress list is updated to remove the completed todo.
    inProgressToDoList = inProgressToDoList.filter(toDo => toDo != toDoValue);
    completedToDoList.push(toDoValue); // The completed todo is added to the completed list.
    displayInProgressToDoList(inProgressToDoList); // The updated in-progress list is displayed.
}

// Function to display an individual todo in the in-progress list.
// This function is used by displayInProgressToDoList() to display each todo.
function displayInProgressToDo(toDo) {
    const toDoElement = inProgressTodoElement(toDo); // Create the HTML element for the todo.
    // Add the todo element to the container.
    inProgressTodoContainer.insertAdjacentHTML('beforeend', toDoElement);

    // Access the 'complete' button for this todo.
    const completeToDoButton = document.getElementById(
        `complete-todo-button-${toDo}`
    );

    // Add an event listener to the 'complete' button.
    // When the button is clicked, the completeTodo() function is called with the value of the clicked todo.
    completeToDoButton.addEventListener('click', e =>
        completeTodo(e.target.dataset.todo)
    );
}

// Function to display all the todos in the in-progress list.
function displayInProgressToDoList(toDoList) {
    inProgressTodoContainer.innerHTML = ''; // Clear the container.
    toDoList.forEach(toDo => displayInProgressToDo(toDo)); // Display each todo in the list.
}

// Function to create the HTML element for a todo.
// This function is used by displayInProgressToDo() to create the todo element.
const inProgressTodoElement = toDoValue => `
    <div class="todo in-progress-todo">
        <p>${toDoValue}</p>
        <button id='complete-todo-button-${toDoValue}' data-todo='${toDoValue}'>Complete</button>
    </div>
    `;

// Add an event listener to the 'add' button.
// When the button is clicked, the addToDo() function is called.
addTodoButton.addEventListener('click', () => addToDo());
