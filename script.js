
var lower = "abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "1234567890".split('');
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');

var howManyCharacters = prompt('How many characters would you like your password to contain?');
console.log(howManyCharacters > 128)

for (var i = howManyCharacters; howManyCharacters > 128 || howManyCharacters < 8; howManyCharacters = prompt('How many characters would you like your password to contain?')) {
    if (howManyCharacters > 128) {
        alert('Password is too long!');
    }

    if (howManyCharacters < 8) {
        alert('Password is too short!');
    }
}

var wantsLowercase = confirm("Do you want to include lowercase alphabet?"); 

var wantsNumbers = confirm("Do you want to include numbers?"); 

var wantsUpper = confirm("Do you want to include uppercase alphabet?"); 

var wantsSpecialCharacters = confirm("Do you want to include Special Characters?"); 

if(!wantsLowercase && !wantsNumbers && !wantsUpper && !wantsSpecialCharacters){
    
    wantsLowercase = confirm("Do you want to include lowercase alphabet?");
     
    wantsNumbers = confirm("Do you want to include numbers?"); 
    
    wantsUpper = confirm("Do you want to include uppercase alphabet?"); 
    
    wantsSpecialCharacters = confirm("Do you want to include Special Characters?"); 

} 
console.log(wantsLowercase, wantsNumbers, wantsUpper, wantsSpecialCharacters,);


let password = "";


// for (var i = 0; i <= complexity; i++) {
//     password = password = values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
// }



function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");
    alert("Password copied to Clipboard!");
}

GenerateButton.addEventListener('click', toggleMode);