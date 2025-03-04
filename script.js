// const arrayTask = ["javascript", "html", "css" ];
// const allTask = document.querySelector(".all-task");
// const daynamicTask = document.querySelector(".api-tasks");

// allTask.textContent =arrayTask.length; // لعرض المهام الموجودة بشكل تلقائئ
// const btnSubmit = document
// .querySelector(".btn-send-task")
// .addEventListener("click", (eo) => {
//     const form = document.querySelector(".forms-tasks");
//     const inputTask = document.querySelector(".input-task").value;
//     eo.preventDefault();

//     if(inputTask > arrayTask.length - 1 || inputTask < 0){
//         daynamicTask.textContent = "soory i cant view ant task";
//         inputTask.value = "";

//     } else{
//         daynamicTask.textContent = arrayTask[inputTask];

//     }

//   });

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