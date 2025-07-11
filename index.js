const button=document.getElementById("button");
const errors=document.querySelectorAll(".error-msg");
const emailInput=document.getElementById("email-input");

button.addEventListener("click",submittingEmail);
emailInput.addEventListener("keyup",handleTyping);

const details={email:""};

function getEmail(){
    return emailInput.value.trim();
}

function handleTyping(){
    if(validateEmail()){
        hideErrors();
    }
}

function hideErrors(){
    Array.from(errors).forEach(element => {
        element.classList.add("hidden");
    });
    emailInput.classList.replace("border-red500","border-pink400");
}

function showErrors(){
    Array.from(errors).forEach(element => {
        element.classList.remove("hidden");
    });
    emailInput.classList.replace("border-pink400","border-red500");  
}

function validateEmail(){
    details.email = getEmail();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(details.email);
}

function submittingEmail(){
    if(!validateEmail()){
        showErrors();
    }
    else{
        hideErrors();
    }
    console.log(details);
}