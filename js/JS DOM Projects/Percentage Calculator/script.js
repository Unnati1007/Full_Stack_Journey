const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");

function calculate() {
    const numVal = parseFloat(numberInput.value);
    const percentVal = parseFloat(percentInput.value);
    //validation 
    if (isNaN(numVal) || isNaN(percentVal)) {
        alert("Please enter valid numbers");
        return;
    }
    const result = (numVal * percentVal) / 100;
    const final = numVal + result;
    percentageResult.textContent = formatNumber(result);
    finalResult.textContent = formatNumber(final);
}
function formatNumber(value) {
    return (
        "$" + value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    )

}

calculateBtn.addEventListener('click', calculate);