// For this example, we will create a simple web page that displays a list of
// fruits. We will provide a JavaScript function to remove a specific fruit based
// on its name.

//Function to add a new fruit
function addFruit(name) {
    const ulEL = document.getElementById('fruitList');
    //create li element
    const li = document.createElement('li');
    li.className = "fruit";
    li.textContent = name;
    ulEL.appendChild(li);
    console.log(li);
    console.log(ulEL);

}
addFruit("Apple");
addFruit("Grapes");
addFruit("Orange");

//Function to remove fruit
function removeFruit(name) {
    const ulEL = document.getElementById('fruitList');
    let fruitFound = false;

    //loop through the fruits to find the fruit
    for (const li of ulEL.children) {
        if (li.textContent === name) {
            fruitFound = true;
            //remove the fruit
            ulEL.removeChild(li);

            break;
        }
    }
}

removeFruit('Grapes');


