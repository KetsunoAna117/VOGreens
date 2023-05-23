// Code using reference from
// https://www.codewithrandom.com/2022/05/email-validation-check-using-javascript.html

var validEmail = 0;
var validName = 0;
var validGender = 0;
var validMessage = 0;
var validSubscribe = 0;

function emailValidation(){
    let email = document.getElementById('email').value;
    let text = document.getElementById('email-text');

    if (email.endsWith('@gmail.com')) {  
        text.innerHTML = ""  
        text.style.color = '#00ff00'
        validEmail = 1
        
    } else {  
        text.innerHTML = "Email must ended with @gmail.com"  
        text.style.color = '#ff0000'
        validEmail = 0
    }
    
    if (email.length == 0) {  
        text.innerHTML = "*Please Enter Email Address";
        text.style.color = '#ff0000';
        validEmail = 0;
    }
}

function nameValidation(){
    let name = document.getElementById('full-name').value;
    let text = document.getElementById('name-text')
    if(name.length != 0){
        validName = 1;
        text.innerHTML = ""  
        text.style.color = '#00ff00'
    }
    else{
        validName = 0;
        text.innerHTML = "*Name cannot be empty!"  
        text.style.color = '#ff0000'
    }

}

function genderValidation(){
    let text = document.getElementById('gender-text');
    if(document.getElementById('gender-male').checked || document.getElementById('gender-female').checked){
        validGender = 1;
        text.innerHTML = ""  
        text.style.color = '#00ff00'
    }
    else{
        validGender = 0;
        text.innerHTML = "*Please select your gender!"  
        text.style.color = '#ff0000'
    }
}

function messageValidation(){
    let message = document.getElementById('message').value;
    let text = document.getElementById('message-text');
    if(message.length > 8){
        validMessage = 1;
        text.innerHTML = ""  
        text.style.color = '#00ff00'
    }
    else{
        validMessage = 0;
        text.innerHTML = "*Message must be more than 8 character(s)!"  
        text.style.color = '#ff0000'
    }
}

function subscribeValidation(){
    let text = document.getElementById('subscribe-text');
    if(document.getElementById('subscribe').checked){
        validSubscribe = 1;
        text.innerHTML = ""  
        text.style.color = '#00ff00'
    }
    else{
        validSubscribe = 0;
        text.innerHTML = "*This option must be checked!"  
        text.style.color = '#ff0000'
    }
}

function validateAll(){
    nameValidation();
    emailValidation();
    genderValidation();
    messageValidation();
    subscribeValidation();
    if(validEmail == 1 && validName == 1 && validGender == 1 && validMessage == 1 && validSubscribe == 1){
        alert("Message Submitted!");
    }
    else{
        return false;
    }
}

