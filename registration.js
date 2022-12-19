const form = document.querySelector("form"),
    userNameField = form.querySelector("#userName"),
    userNameInput = userNameField.querySelector("#inputUserName"),
    fullNameField = form.querySelector("#fullName"),
    fullNameInput = fullNameField.querySelector("#inputFullName"),
    emailField = form.querySelector("#email"),
    emailInput = emailField.querySelector("#inputEmail"),
    passField = form.querySelector("#password"),
    passInput = passField.querySelector("#inputPassword"),
    confirmField = form.querySelector("#confirm"),
    confirmInput = confirmField.querySelector("#confirmPassword");

function checkFullName(){
    const fnPattern = new RegExp('^[a-zA-Z ]+$');
    if(!fullNameInput.value.match(fnPattern)){
        return fullNameField.classList.add("invalid");
    }
    fullNameField.classList.remove("invalid");
}

function checkUserName(){
    if(userNameInput.value.length > 12 || userNameInput.value.length === 0){
        return userNameField.classList.add("invalid");
    }
    userNameField.classList.remove("invalid");
}

function checkEmail() {
    const emailPattern = new RegExp('^[^ ]+@[^ ]+\\.[a-z]{2,3}$');
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        pInput.type = "password";
    });
});

function createPass() {
    const arr = [...passInput.value];
    const checkPassword = arr.length !== 0 && (new Set(arr)).size !== 1;
    if (!checkPassword) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

function confirmPass() {
    if (passInput.value !== confirmInput.value || confirmInput.value === "") {
        return confirmField.classList.add("invalid");
    }
    confirmField.classList.remove("invalid");
}

form.onsubmit = (e) => {
    e.preventDefault();
    checkFullName();
    checkUserName();
    checkEmail();
    createPass();
    confirmPass();

    fullNameInput.addEventListener("keyup", checkFullName);
    userNameInput.addEventListener("keyup", checkUserName);
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    confirmInput.addEventListener("keyup", confirmPass);
}

function reg_php(email, pass, pass2, fullName, userName){
    if(pass == pass2){
        $.ajax({
            url : 'register.php',
            type : 'POST',
            data: {email: email, password: pass, fullName: fullName, userName: userName},
            success : function (result) {
                console.log (result);
                if(result == "Success!")
                    window.alert("Success") ;
                else window.alert("Wrong input");
            },
            error : function () {
                console.log ("Error");
            }
        });
    }
    else{
        alert("different password inputs!");
    }
}
