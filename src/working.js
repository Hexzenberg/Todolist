// working.js
function work() {
    const form = document.querySelector('#new_task');
    const input = document.querySelector('#new_task_input');
    const listElement = document.querySelector('#tasks');

    // Retrieve tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Populate tasks from local storage
    savedTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        listElement.appendChild(taskElement);
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please enter a task!');
            return;
        }

        // Create task element and add to the list
        const taskElement = createTaskElement(task);
        listElement.appendChild(taskElement);

        // Save tasks to local storage
        saveTasksToLocalStorage();

        input.value = ""; // Empty the input field
    });

    listElement.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('edit')) {
            const taskContentInput = target.parentElement.parentElement.querySelector('.text');
            toggleEdit(taskContentInput, target);
        } else if (target.classList.contains('delete')) {
            const taskElement = target.parentElement.parentElement;
            listElement.removeChild(taskElement);

            // Save tasks to local storage after deletion
            saveTasksToLocalStorage();
        }
    });

    function createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add("task");

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add("content");

        const taskContentInput = document.createElement('input');
        taskContentInput.classList.add("text");
        taskContentInput.type = "text";
        taskContentInput.value = task;
        taskContentInput.readOnly = true;

        const taskAction = document.createElement('div');
        taskAction.classList.add("action");

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('edit');
        taskEdit.innerText = "Edit";

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('delete');
        taskDelete.innerText = "Delete";

        taskAction.appendChild(taskEdit);
        taskAction.appendChild(taskDelete);

        taskContentElement.appendChild(taskContentInput);
        taskElement.appendChild(taskContentElement);
        taskElement.appendChild(taskAction);

        return taskElement;
    }


    function toggleEdit(inputElement, editButton) {
        inputElement.readOnly = !inputElement.readOnly;
        inputElement.focus();
        editButton.innerText = inputElement.readOnly ? "Edit" : "Save";

        // Save tasks to local storage after editing
        saveTasksToLocalStorage();
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(listElement.children)
            .map(taskElement => taskElement.querySelector('.text').value);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default work;
