

const arrayTasks = [
  "Learn Html",
  "Learn Css",
  "Learn Javascript",
  "Learn Problem Solving",
  "project execution",
  

];
const daynamicTask = document.querySelector(".api-tasks");
const allTask = document.querySelector(".all-task");
allTask.textContent = arrayTasks.length
allTask.classList.add("js-all-task");


const btn = document.querySelector(".btn-send-task")//when click btn form
btn.addEventListener("click" , (eo)=>{
    eo.preventDefault()
    const inputTask = document.querySelector(".input-task").value;
    console.log(inputTask);

    if(inputTask > arrayTasks.length-1 || inputTask < 0){
        daynamicTask.textContent = "soory no task"
    } else{
        daynamicTask.textContent = arrayTasks[inputTask]

    }
})
