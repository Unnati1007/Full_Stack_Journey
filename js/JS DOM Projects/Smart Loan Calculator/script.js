document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');


    //Select the element
    const calculateBtn = document.getElementById("calculateBtn");
    const amountInput = document.getElementById("amount");
    const interestInput = document.getElementById("interest");
    const yearsInput = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthlyPayment");
    const totalPayment = document.getElementById("totalPayment");
    const totalInterest = document.getElementById("totalInterest");

    //Function to calculate loan
    function calculateLoan() {
        const principal = parseFloat(amountInput.value);
        const intrest = parseFloat(interestInput.value) / 100 / 12;
        const payments = parseFloat(yearsInput.value) * 12;
        if (isNaN(principal) || isNaN(intrest) || isNaN(payments)) {
            alert("Please enter valid inputs");
            return;
        }
        if (principal <= 0 || intrest <= 0 || payments <= 0) {
            alert("Please enter positive values");
            return;
        }
        //calculate monthly payment
        const x = Math.pow(1 + intrest, payments);
        const monthly = (principal * intrest * x) / (x - 1);
        if (isFinite(monthly)) {
            const total = monthly * payments;
            const totalInterest = total - principal;
            //display the results



        }


    }
    //bind the event to calc btn
    calculateBtn.addEventListener('click', calculateLoan);

});