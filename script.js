let password_field = document.querySelector('input')
// password_field.value = "hsffadfb"
let length = 10;


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = upperCase.toLowerCase();
let numbers = "1234567890";
let symbols = "!@#$_./&";

let allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password_field.value = password;
}

function copyPassword(){
    password_field.select();
    document.execCommand("copy");
}

document.querySelector('button').addEventListener("click", createPassword); 

document.querySelector('#copy').addEventListener("click", copyPassword);
