// nextSibling Traversal
//Get the container element
const container = document.getElementById("container");

//Get all buttons within the container
const button1El = container.querySelector("button");
console.log(button1El);

//Loop through each button and change the text of its next sibling

button1El.forEach(button => {
    const nextEle = button.nextSibling;
    console.log(nextEle);

    if (nextEle && nextEle.nodeType === 3) {
        nextEle.textContent = "Changed";
    }
});
