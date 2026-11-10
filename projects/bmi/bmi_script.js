form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const weight = parseFloat(document.querySelector("#weight").value);
    const height = parseFloat(document.querySelector("#height").value);
    const result = document.querySelector("#result");

    if (weight <0 || weight === '' || isNaN(weight)) {
        result.textContent = "Please enter a valid weight.";
    }
    else if (height <0 || height === '' || isNaN(height)) {
        result.textContent = "Please enter a valid height.";
    }
    else{
        const bmi = weight / (height * height);
        result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    }


});

