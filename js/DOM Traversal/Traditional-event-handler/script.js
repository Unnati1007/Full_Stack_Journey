//---Mouse Events---

// 1. Click Event
function clickHandler() {
    console.log("Click Event (addEventListener)");
}
document.getElementById('clickButton').addEventListener('click', clickHandler);

// 2. Double Click Event
function dbClickHandler() {
    console.log("Double Click Event (addEventListener)");
}
document.getElementById('doubleClickButton').addEventListener('dblclick', dbClickHandler);

// 3. Mouse Over Event
function mouseOverHandler() {
    console.log("Mouse Over Event (addEventListener)");
}
document.getElementById('hoverDiv').addEventListener('mouseover', mouseOverHandler);

// 4. Mouse Out Event
function mouseOutHandler() {
    console.log("Mouse Out Event (addEventListener)");
}
document.getElementById('hoverDiv').addEventListener('mouseout', mouseOutHandler);


//---Keyboard Events---

// 1. Key Down Event
function keyDownHandler() {
    console.log("Key Down Event (addEventListener)");
}
document.getElementById('keyInput').addEventListener('keydown', keyDownHandler);

// 2. Key Up Event
function keyUpHandler() {
    console.log("Key Up Event (addEventListener)");
}
document.getElementById('keyInput').addEventListener('keyup', keyUpHandler);


//---Form Events---

// 1. Form Submit Event
function submitHandler(event) {
    event.preventDefault(); // Prevents page reload
    console.log("Form Submit Event (addEventListener)");
}
document.getElementById('myForm').addEventListener('submit', submitHandler);

// 2. Input Focus Event
function focusHandler() {
    console.log("Input Focus Event (addEventListener)");
}
document.getElementById('formInput').addEventListener('focus', focusHandler);

// 3. Input Blur Event
function blurHandler() {
    console.log("Input Blur Event (addEventListener)");
}
document.getElementById('formInput').addEventListener('blur', blurHandler);
