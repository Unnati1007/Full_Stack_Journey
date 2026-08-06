// Make sure that the elements are loaded so we will use DOM 

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Loaded");
    //Select Element
    const counterValue = document.getElementById("counter-value");
    // console.log(counterValue);

    const btnIncrease = document.getElementById("btn-increase");
    const btnDecrease = document.getElementById("btn-decrease");
    const btnReset = document.getElementById("btn-reset");
    console.log(counterValue, btnIncrease, btnDecrease, btnReset);
    //Global Value
    let count = 0;
    //add event listener
    btnIncrease.addEventListener("click", () => {
        count++;
        //update the counter value
        // counterValue.textContent = count;
        updateCounter();
    });
    btnDecrease.addEventListener("click", () => {
        count--;
        //update the counter value
        // counterValue.textContent = count;
        updateCounter();
    });
    btnReset.addEventListener("click", () => {
        count = 0;
        //update the counter value
        // counterValue.textContent = count;
        updateCounter();
    });
    //update counter fn
    function updateCounter() {
        counterValue.textContent = count;
    }
});




