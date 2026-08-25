// Child Node Traversal
//Select the outer div using ID
const outerDiv = document.getElementById("outerDiv");
console.log(outerDiv);
//Navigate to the first child, which is a text node
const firstChild = outerDiv.childNodes[0];
console.log(firstChild);

//Navigate to second child, which is the innerdiv
const innerDivEl = outerDiv.childNodes[1];
console.log(innerDivEl);

//Step 3: select the first child of the inner div
const innerDivFirstChildEl = innerDivEl.childNodes[0];
console.log(innerDivFirstChildEl);

//Step 4: select the second child of the inner div
const nestetListEl = innerDivEl.childNodes[1];
console.log(nestetListEl);