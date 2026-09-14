//Add a single event listener to the ul 
document.getElementById("itemList").addEventListener("click", function (event) {
    const clickedEl = event.target;
    //Check if the clicked element is in the list
    console.log(clickedEl.tagName);
    if (clickedEl.tagName === "LI") {
        const itemNumber = clickedEl.getAttribute("data-item");
        console.log(`You clicked on item ${itemNumber}`);
    }
});