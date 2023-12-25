import work from "./working";

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById('header');
    const h1 = document.createElement('h1');
    const form = document.createElement('form');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const main = document.getElementById('main');
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');

    header.id = "header";
    h1.textContent = "Tasks todo";
    form.id = "new_task";
    input1.type = "text";
    input1.id = "new_task_input";
    input1.placeholder = "Enter a task";
    input2.type = "submit";
    input2.id = "new_task_submit";
    input2.value = "Add task";
    section.classList.add('task_list');
    h2.textContent = "Tasks";
    div.id = "tasks";

    form.appendChild(input1);
    form.appendChild(input2);
    header.appendChild(form);
    section.appendChild(h2);
    section.appendChild(div);
    main.appendChild(section);

    work(); // Call the work function here
});
