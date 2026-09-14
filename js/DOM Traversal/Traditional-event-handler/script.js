//---Mouse Event-----

// Click Event
document.getElementById('clickButton').onclick = function clickButton() {
    console.log("Mouse is clicked");
}

// Double Click Event
document.getElementById('doubleClickButton').ondblclick = function dbclickButton() {
    console.log("Mouse is double clicked");
}

// Mouse Over Event
document.getElementById('hoverDiv').onmouseover = function onMouseOverHandler() {
    console.log("Mouse Hovered");
}

// Mouse Out Event
document.getElementById('hoverDiv').onmouseout = function onMouseOutHandler() {
    console.log("Mouse Out");
}


//-----Keyboard Event-----

// Key Down Event
document.getElementById('keyInput').onkeydown = function onkeydownHandler() {
    console.log("Key Down");
}

// Key Up Event
document.getElementById('keyInput').onkeyup = function onkeyupHandler() {
    console.log("Key Up");
}


//-----Form Event-----

// Form Submit Event
document.getElementById('myForm').onsubmit = function onSubmitHandler(event) {
    event.preventDefault(); // Prevents page from reloading
    console.log("Form Submitted");
}

// Input Focus Event
document.getElementById('formInput').onfocus = function onFocusHandler() {
    console.log("Input Focused");
}

// Input Blur Event
document.getElementById('formInput').onblur = function onBlurHandler() {
    console.log("Input Blurred");
}
