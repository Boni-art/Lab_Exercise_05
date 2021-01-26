

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks'); 


// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);




 // Add New  Task Function definition 
 function addNewTask(e) {

    if (taskInput.value === ''){
        taskInput.style.borderColor = "red";
        return;
    } else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.innerHTML = '<i class="fa fa-remove"></i>';
        link.className = 'delete-item secondary-content';
        li.appendChild(link);
        taskList.appendChild(li);
    }



    e.preventDefault(); //disable form submission
}

function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }
    }

}


// Clear Task Function definition 
function clearAllTasks() {

    alert("Clear tasks ....");

}
// Filter tasks function definition 
function filterTasks(e) {

    console.log("Task Filter ...");

}

 
