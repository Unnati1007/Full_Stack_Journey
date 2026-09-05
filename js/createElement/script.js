//Function to create a new task 

function createTask(newTask) {
    //Create a new div element to hold the task 
    const taskEl = document.createElement("div");
    //Add new css to the created element 
    // taskEl.setAttribute("class", "task");
    taskEl.className = "text";
    // console.log(taskEl);
    //Create a text node and append it to the task element 
    const taskText = document.createTextNode("Programming");

    taskEl.appendChild(taskText);
    //Finally, append the task to the container div
    document.getElementById("container").appendChild(taskEl);
    console.log(taskText);
    console.log(taskEl);




}
createTask();