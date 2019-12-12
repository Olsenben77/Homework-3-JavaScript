
var howManyCharacters = prompt('How many characters would you like your password to contain?');
console.log(howManyCharacters > 128)

for (var i=howManyCharacters; howManyCharacters > 128 || howManyCharacters < 8; howManyCharacters = prompt('How many characters would you like your password to contain?')) {
if(howManyCharacters > 128){
    alert('Password is too long!');
    }
    
    if(howManyCharacters < 8){
    alert('Password is too short!');
    }
}


function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


var alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
var numbers = "1234567890".toCharArray();
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" .toCharArray();

let password ="";

for (var i=0; i <= complexity; i++){
    password = password = values.charAt(Math.floor(Math.random() * Math.floor(value.length-1)));
}



function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");
    alert("Password copied to Clipboard!");
}

GenerateButton.addEventListener('click',toggleMode);