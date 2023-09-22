// Variables
const addTaskBtn = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event listner for add-button

addTaskBtn.addEventListener('click',function(){

    //add a new task to the taskContaner
    let task = document.createElement('div');
    task.classList.add('task')// to add a class to this div

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`; //let the inner text of the list item be the value entered by 

    task.appendChild(li);

    //Create the button of 'check the task' and 'delete task'
    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add("checkTask");
    task.appendChild(checkBtn);//add the button to the 'task'

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add("deleteTask");
    task.appendChild(deleteBtn);//add the button to the 'task'

    //Make sure that the user entered a value before adding a task
    if(inputTask.value === ""){
        alert("Please enter a task");
    }else{
        taskContainer.appendChild(task);
        inputTask.value = "";
    }

    //Make functionality for the 'check' button
    checkBtn.addEventListener('click',function(){
        checkBtn.parentElement.style.textDecoration = 'line-through';
    })

    //Make functionality for the 'delete' button
    deleteBtn.addEventListener('click',function(e){
        let target = e.target;//refrenece the element that has been clicked
        target.parentElement.parentElement.remove(); //target = trash-can , parentElement = list element, parentElement = task div
        
    })

})
