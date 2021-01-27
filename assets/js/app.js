

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks'); 

const ascendButton = document.querySelector('#ascending');

const descendButton = document.querySelector('#descending');

var sortCheck = 1;

var backEndList = document.createElement('ul');

ascendButton.addEventListener('click', ascend);

descendButton.addEventListener('click', descend);

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

document.addEventListener('DOMContentLoaded', function() {
    $('.dropdown-trigger').dropdown();
    // var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = M.Dropdown.init(elems, options);
});


 // Add New  Task Function definition 
 function addNewTask(e) {

    if (taskInput.value === ''){
        taskInput.style.borderColor = "red";
    } else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.innerHTML = '<i class="fa fa-remove"></i>';
        link.className = 'delete-item secondary-content';
        li.append(link);
        if (sortCheck == 1) {
            taskList.append(li);
        } else {
            taskList.prepend(li);
        }
        taskInput.value = '';
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
    // const toBeSearched = document.querySelectorAll(".collection-item");
    // for (let i = 0; i < toBeSearched.length; i++){
    //     toBeSearched[i].style.display = "none";
    // }
    taskList.innerHTML = '';
}
// Filter tasks function definition 
function filterTasks(e) {

    let searchContent = filter.value.toUpperCase();
    const toBeSearched = document.querySelectorAll(".collection-item");

    for (let i = 0; i < toBeSearched.length; i++) {
        if (toBeSearched[i].textContent.toUpperCase() == searchContent) {
            toBeSearched[i].style.display = "block";
        }
        if (toBeSearched[i].textContent.toUpperCase() != searchContent) {
            toBeSearched[i].style.display = "none";
        }
        if (searchContent == "") {
            for (let i = 0; i < toBeSearched.length; i++){
                toBeSearched[i].style.display = "block";
            }
        }        
    }
}    


function ascend(){
    taskList.innerHTML = '';
    const toBeSearched = document.querySelectorAll(".collection-item");
    for (let i = 0; i < toBeSearched.length; i++) {
        const element = toBeSearched[i];
        taskList.prepend(element);
    }   

    // taskList.innerHTML = '';
    // for (let i = 0; i < backEndList.length; i++) {
    //     taskList.append(backEndList[i]);
    //     alert(backEndList[i]);
    // }
    // // backEndList.forEach(element => {
    // //     taskList.append(element);
    // //     console.log(element);
    // // });
    sortCheck = 1;
}



function descend() {
    taskList.innerHTML = '';
    const toBeSearched = document.querySelectorAll(".collection-item");
    for (let i = 0; i < toBeSearched.length; i++) {

        taskList.prepend(toBeSearched[i]);
    }

    sortCheck = 2;
}

 
