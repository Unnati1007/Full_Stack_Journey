// Select the p element
const p = document.getElementById("textElement");
// p.classList.add("highlight", "bold", "italic");

//function to add class
function addClass() {
    p.classList.add("highlight", "bold", "italic");
    const isTrue = p.classList.contains("italic");
    console.log(isTrue);
    console.log(p);
}
//remove Class
function removeClass() {
    p.classList.remove("highlight", "bold", "italic");
}
//toggle Class
function toggleClass() {
    p.classList.toggle("highlight");
}
//checkContains
function checkContains() {
    alert(
        p.classList.contains("highlight")
            ? "Contains Highlight"
            : "Does not contain Highlight"
    );
}

//replaceClass
function replaceClass() {
    p.classList.replace("highlight", "active");
}

//listItem
function listItem() {
    alert(p.classList.item(0));
}

//getValue
function getValue() {
    alert(p.classList.value);
}
