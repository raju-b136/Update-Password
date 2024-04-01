let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

newPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
});

confirmPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required*";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
});


let validateNewPassword = function() {
    let newPassword = newPasswordEl.value
    let confirmPassword = confirmPasswordEl.value

    if (newPassword === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
}

let validateConfirmPassword = function() {
    let newPassword = newPasswordEl.value
    let confirmPassword = confirmPasswordEl.value

    if (newPassword !== confirmPassword) {
        confirmPasswordErrMsgEl.textContent = "Password must be same*";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
}

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});