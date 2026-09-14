//---Mouse Event---
function clickhandler() {
    console.log("Mouse Clicked");
}

function dbclickhandler() {
    console.log("Mouse Double Clicked");
}

function hoverhandler() {
    console.log("Mouse Hovered");
}

function onMouseout() {
    console.log("Mouse Out");
}

//---Keyboard Event---
function keydown() {
    console.log("Key Down");
}

function keyup() {
    console.log("Key Up");
}

function keypress() {
    console.log("Key Pressed");
}

//---Form Events---
function submitHandler(event) {
    event.preventDefault(); // Prevents page reload
    console.log("Form Submitted");
}

function focusHandler() {
    console.log("Input Focused");
}

function blurHandler() {
    console.log("Input Blurred");
}

function changeHandler() {
    console.log("Input Changed");
}
