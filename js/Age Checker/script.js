document
    .getElementById("CheckButton")
    .addEventListener("click", function () {
        const AgeValue = parseInt(document.getElementById("ageInput").value);
        const resultDiv = document.getElementById("Results");
        
        console.log(typeof (AgeValue));
        
        resultDiv.innerHTML = "";
        
        if (isNaN(AgeValue) || AgeValue < 0) {
            resultDiv.innerHTML = 'Please enter a valid age';
            return;
        }

        if (AgeValue >= 18) {
            resultDiv.innerHTML += 'You are eligible to vote <br/>';
        }
        else {
            resultDiv.innerHTML += 'You are not eligible to vote <br/>';
        }
        if (AgeValue >= 21) {
            resultDiv.innerHTML += 'You can buy alcohol <br/>';
        }
        else {
            resultDiv.innerHTML += 'You cannot buy alcohol <br/>';
        }
        if (AgeValue >= 16) {
            resultDiv.innerHTML += 'You can drive <br/>';
        }
        else {
            resultDiv.innerHTML += 'You cannot drive <br/>';
        }
    });
