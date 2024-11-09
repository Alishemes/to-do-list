let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksdiv = document.querySelector(".tasks");

let arrayoftasks = [];

submit.onclick = function () {
    if (input.value !== "") {
        addtasktoarray(input.value);
        input.value = "";  
    }
}

function addtasktoarray(tasktext) {
    arrayoftasks.push(tasktext);

    let taskelement = document.createElement("div");
    taskelement.classList.add("task");


//span for text
    let taskText = document.createElement("span");

    taskText.textContent = tasktext;
    taskelement.appendChild(taskText);

    tasksdiv.appendChild(taskelement);



//done
    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("btn2");

    doneButton.onclick = function () {
        taskText.classList.toggle("done");  

    };
    taskelement.appendChild(doneButton);




//delet
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delet";
    deleteButton.classList.add("btn");

    deleteButton.onclick = function () {
        tasksdiv.removeChild(taskelement);
    };
    taskelement.appendChild(deleteButton);


}

//isert task by Enter
input.addEventListener("keyup" , function(event){
    if(event.key == "Enter" && input.value !== "")
    {
        addtasktoarray(input.value);
        input.value="";
    }
})

//To show a message on the refresh
window.addEventListener("beforeunload",function(event){
    event.preventDefault();

})