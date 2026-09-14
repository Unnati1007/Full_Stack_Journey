//Add event listner to the outer div
document.getElementById("outerDiv").addEventListener("click", function (event) {
    alert("Outer Div Clicked" + event.eventPhase);
}, false); // bubbling Phase 

//Add event listner to the middle div
document.getElementById("middleDiv").addEventListener("click", function (event) {
    alert("Middle Div Clicked" + event.eventPhase);
    event.stopPropagation();
}, false); // bubbling Phase 

//Add event listner to the inner div
document.getElementById("innerDiv").addEventListener("click", function (event) {
    alert("Inner Div Clicked" + event.eventPhase);
}, false); // bubbling Phase 