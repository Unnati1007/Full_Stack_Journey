// Select the list element with id "cherry"
const cherryEL = document.getElementById("cherry");


//Select the previous element of cherry should be banana
const previousFruitElement = cherryEL.previousElementSibling;
console.log(previousFruitElement);

//Select the next element of cherry which should be date
const nextFruitElement = cherryEL.nextElementSibling;
console.log(nextFruitElement);