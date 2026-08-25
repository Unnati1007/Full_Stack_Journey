//Select a list item by using data-item attribute
const listItme = document.querySelector("[data-item='fruit']");

//Traverse to Parent
const parentElement = listItme.parentNode
console.log(parentElement);

//Naviagte to grandparent
const grandParent = parentElement.parentNode
console.log(grandParent);

// Step 4: Navigate to great- grandparent
const greatGrandParentEl = grandParent.parentNode;
console.log(greatGrandParentEl);

