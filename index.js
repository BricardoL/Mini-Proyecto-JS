document.getElementById("form").addEventListener('submit', saveMyTask);

function saveMyTask(e){
    var name = document.getElementById("topic").value;
    var descripcion = document.getElementById("description").value;
    var manager = document.getElementById("manager").value;
    let task = {name, descripcion, manager};

    if(localStorage.getItem('task') == null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('task', JSON.stringify(tasks));
    } else{
        let tasks = JSON.parse(localStorage.getItem('task'));
        tasks.push(task);
        localStorage.setItem('task', JSON.stringify(tasks));
    }
    
    getMyTask();
    document.getElementById('form').reset();
    e.preventDefault();
}

function deleteTask(n){
    let task = JSON.parse(localStorage.getItem('task'));
    for(var i=0; i<task.length; i++){
        if(task[i].name == n){
            task.splice(i, 1);
        }
    }

    localStorage.setItem('task', JSON.stringify(task));
    getMyTask();
}

function getMyTask(){
    let task = JSON.parse(localStorage.getItem('task'));
    let taskView = document.getElementById("task");
    taskView.innerHTML = '';
    for(var i=0; i< task.length; i++){
        let topic = task[i].name;
        let descripcion = task[i].descripcion;
        let manager = task[i].manager;

        taskView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${topic} - ${descripcion} - ${manager}
        <a href="#" onclick="deleteTask('${topic}')" class="btn btn-danger ml-5">Delete</a>
        </p></div></div>`;
    }
}

