const inputPassword=document.querySelector('.input-password');
const checkPassword=document.querySelector('.check-password');
const output=document.querySelector('.output');
const showPassword=document.querySelector('.show-password');
const hidePassword=document.querySelector('.hide-password');
const submitButton=document.querySelector('.submit-button');

submitButton.disabled=true;

inputPassword.addEventListener("keyup",unableDisable);

checkPassword.addEventListener("click",validatePassword);
showPassword.addEventListener("click",showPass);

hidePassword.addEventListener("click",hidePass);


function unableDisable(){
    var passwordLength=inputPassword.value.length;
    console.log(passwordLength);
    if(passwordLength>=10){
        submitButton.disabled=false;
    }else{
        submitButton.disabled=true;
    }
}
function validatePassword(){
    var passwordLength=inputPassword.value.length;
    console.log(passwordLength);

    if(passwordLength>=10){
        output.innerText="success";
        // submitButton.disabled=false;

    }else{
        // submitButton.disabled=true;

        output.innerText="error";

    }
    
}

function showPass(){
    inputPassword.type="text";
}

function hidePass(){
    inputPassword.type="password";

}