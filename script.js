const inputs = document.querySelectorAll("input");
const form = document.querySelector("#user-form");
const errorMessages = document.querySelectorAll(".error");
const submitButton = document.querySelector(".submit-form");
const password = document.querySelector("#user-password");


for (let i = 0; i < inputs.length; i++) {
    let currentInput = inputs[i];
    let currentError = errorMessages[i];
    currentInput.addEventListener("keyup", () => {
       currentError.textContent = validationChecker(currentInput);
    });
}


submitButton.addEventListener("click", (e) => {
    inputs.forEach(input => {
        if (!input.checkValidity() || validationChecker(input) !== "") {
            e.preventDefault();
            input.nextElementSibling.textContent = validationChecker(input);
        }
        if (!input.value) {
            input.style.border = '1px solid red';
        }
    });
});

function validationChecker(input) {
    let numbers = /^[0-9]+$/;

    if (input.value === "") {
        return "This Field is Required";
    }
    
    else if (input.type === "tel" && !input.value.match(numbers)) {
        return "Please Enter a Valid Number";
    }

    else if (input.type === "tel" && input.value.length < 10) {
        return "Please Enter a 10 Digit Phone Number";
    }

    else if (input.type === "email" && !input.checkValidity()) {
        return "Please Enter a Valid Email Address";
    }

    else if (input.id === "user-password-confirm" && input.value !== password.value) {
        return "Password Does Not Match";
    }
    else {
        return "";
    }
}