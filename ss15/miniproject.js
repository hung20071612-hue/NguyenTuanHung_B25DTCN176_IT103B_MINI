let listTask = [];
let inputTask = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener(`click`, createTask);
inputTask.addEventListener(`keypress`,(e) => {
    if (e.key === `Enter`)
        createTask();
})
function createTask() {
    let valueInput = inputTask.value
    if(valueInput.trim() === ``){
        alert(`Vui lòng nhập tên công việc!`);
        return;
    }
    let newTask = {
        id: Date.now(),
        name: valueInput,
        status: false
    }
    listTask.push(newTask);
    inputTask.value = ``;
    inputTask.focus();
    renderTask();
}

function renderTask() {
    taskList.innerHTML =``;
    if (listTask.length === 0) {
        taskList.innerHTML = `
            <div>
                <div>📋</div>
                <div>Chưa có công việc nào. Hãy thêm công việc mới!</div>
            </div>
        `
        return;
    }
    listTask.forEach((task) => {
        let showList = document.createElement(`div`);
        showList.innerHTML = `
            <input type="checkbox" class="task-checkbox"/>
            <span id="task-text-${task.id}">${task.name}</span>
            <div class="task-actions">
                <button onclick="updateTask(${task.id})" class="btn-edit">✏️ Sửa</button
                ><button onclick="deleteTask(${task.id})" class="btn-delete">🗑️ Xóa</button>
            </div>
        `;
        taskList.appendChild(showList);
    });
}

function updateTask(id) {
    let findObject = listTask.find(task => task.id === id)
    let valueInput = document.getElementById(`task-text-${task.id}`)
    let newInput = document.createElement(`input`);
    newInput.type = 'text';
    newInput.value =  findObject.name

    valueInput.replaceWith(`newInput`)
    newInput.select();
    newInput.focus();

    function save() {
        let newValueInput = newInput.value;
        if (newValueInput === '') {
            alert('Tên công việc không được để trống');
            return;
        }
        findObject.name  = newValueInput;
        renderTask();
    }

    newInput.addEventListener('keypress',(e) => {
        if (e.key ==='Enter') {
            save();
        }
    })
}



function deleteTask(id) {
    listTask = listTask.filter(task => task.id !== id);
    renderTask();
}

document.addEventListener(`DOMContentLoaded`,renderTask)
