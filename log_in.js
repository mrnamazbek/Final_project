const form = document.querySelector("form"),
    emailField = form.querySelector("#email"),
    emailInput = emailField.querySelector("input"),
    passField = form.querySelector("#password"),
    passInput = passField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault();
    (emailInput.value === "") ? emailField.classList.add("error") : checkEmail();
    (passInput.value === "") ? passField.classList.add("error") : checkPass();

    emailInput.onkeyup = ()=>{checkEmail();}
    passInput.onkeyup = ()=>{checkPass();}

    function checkEmail(){
        let pattern = new RegExp('^[^ ]+@[^ ]+\\.[a-z]{2,3}$');
        if(!emailInput.value.match(pattern)){
            emailField.classList.add("error");
            emailField.classList.remove("valid");
            let errorTxt = emailField.querySelector(".error-txt");
            (emailInput.value !== "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be empty";
        }else{
            emailField.classList.remove("error");
            emailField.classList.add("valid");
        }
    }

    function checkPass(){
        if(passInput.value === ""){
            passField.classList.add("error");
            passField.classList.remove("valid");
        }else{
            passField.classList.remove("error");
            passField.classList.add("valid");
        }
    }
}

function log_php(lastEmail, lastPassword){
    $.ajax({
        url: 'bonus.php',
        type: 'POST',
        data: {email: lastEmail, password: lastPassword},
        success: function (result){
            console.log(result);
            if(result == "Logged IN!"){
                document.getElementById('signId').style.display = 'none';
                window.alert("You have logged in successfully");
            }
            else window.alert("Wrong login or password");
        },
        error: function (){
            console.log ('error');
            window.alert("errr");
        }
    });
}