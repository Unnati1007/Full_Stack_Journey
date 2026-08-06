// Calc tip function 
function calculateTip() {
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const serviceRating = parseFloat(document.getElementById("service-rating").value);
    const numberPeople = parseFloat(document.getElementById("number-people").value);

    //validation
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }
    if (numberPeople < 1) {
        alert("Please enter atleast 1 person");
        return;
    }
    //calculate the values

    const tipAmount = billAmount * serviceRating;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numberPeople;
    const tipPerPerson = tipAmount / numberPeople;
    //display result with 2 decimal places
    document.getElementById("tip-amount").textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById("total-bill").textContent = `$${totalBill.toFixed(2)}`;
    document.getElementById("per-person").textContent = `$${perPerson.toFixed(2)}`;
    document.getElementById("tip-per-person").textContent = `$${tipPerPerson.toFixed(2)}`;
}
//add event listener to the button

document.getElementById("calculate-btn").addEventListener("click", calculateTip);

//calculate based on input change
const allEls = document.querySelectorAll("input,select").forEach((element) => {
    element.addEventListener("input", calculateTip);
});
// console.log(allEls);