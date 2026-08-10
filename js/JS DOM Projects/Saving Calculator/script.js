// Initialize Feather icons
feather.replace();

// Roadmap Step 1: Select DOM elements
const goalAmountInput = document.getElementById("goal-amount");
const currentSavingsInput = document.getElementById("current-savings");
const monthlyContributionInput = document.getElementById("monthly-contribution");
const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

//Add eventlistener for calculate button
calculateBtn.addEventListener("click", () => {
    const goalamount = parseFloat(goalAmountInput.value);
    const currentSaving = parseFloat(currentSavingsInput.value);
    const monthlyContribution = parseFloat(monthlyContributionInput.value);
    if (isNaN(goalamount) || isNaN(currentSaving) || isNaN(monthlyContribution) || goalamount <= 0 || monthlyContribution <= 0) {
        result.textContent = "Please enter valid positive numbers";
        result.classList.add("show");
        return;
    }
    // Step 4: Perform the calculation
    const remainingAmount = goalamount - currentSaving;
    const monthsToGoal = Math.ceil(remainingAmount / monthlyContribution);
    const ProgressPercentage = Math.min(100, Math.max(0, (currentSaving / goalamount) * 100));
    progressBar.style.width = `${ProgressPercentage}%`;
    //Display the result based on the saving progress
    result.classList.remove("show");
    setTimeout(() => {
        //Handle UI updates and transitions for result display
        if (currentSaving >= goalamount) {
            result.innerHTML = `Congratulations! You have reached your goal.`;
        } else {
            result.innerHTML = `Keep nurturing your savings! You'll reach your goal in ${monthsToGoal} months.`;
        }
        result.classList.add("show");
    }, 100);
});

