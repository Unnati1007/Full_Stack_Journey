//Named function for alert message 

function showAlert() {
    console.log("Hello");
}

//getting the button element 
const alertButton = document.getElementById('alertButton');

//Add addevent listener to the element
alertButton.addEventListener("click", showAlert);

//Named function for removing alert

function removeAlert() {
    alertButton.removeEventListener("click", showAlert);
}

//getting the button element 
const removeButton = document.getElementById('removeButton');

//Add addevent listener to the element
removeButton.addEventListener("click", removeAlert);