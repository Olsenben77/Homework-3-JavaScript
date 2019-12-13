
var lower = "abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "1234567890".split('');
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');


function generatePasswordOptions() {

    var howManyCharacters = prompt('How many characters would you like your password to contain?');


    if (howManyCharacters > 128) {
        alert('Password is too long!');
        return;
    }

    if (howManyCharacters < 8) {
        alert('Password is too short!');
        return;
    }
    if (isNaN(howManyCharacters)) {
        alert('Password length must be a number!');
        return;
    }

    var wantsLowercase = confirm("Do you want to include lowercase alphabet?");
    var wantsNumbers = confirm("Do you want to include numbers?");
    var wantsUpper = confirm("Do you want to include uppercase alphabet?");
    var wantsSpecialCharacters = confirm("Do you want to include Special Characters?");

    if (!wantsLowercase && !wantsNumbers && !wantsUpper && !wantsSpecialCharacters) {

        wantsLowercase = confirm("Do you want to include lowercase alphabet?");

        wantsNumbers = confirm("Do you want to include numbers?");

        wantsUpper = confirm("Do you want to include uppercase alphabet?");

        wantsSpecialCharacters = confirm("Do you want to include Special Characters?");

    }

    var passwordOptions = {
        howManyCharacters: howManyCharacters,
        wantsLowercase: wantsLowercase,
        wantsNumbers: wantsNumbers,
        wantsUpper: wantsUpper,
        wantsSpecialCharacters: wantsSpecialCharacters
    }

    return passwordOptions;

}

function generatePassword() {

    var options = generatePasswordOptions();

    console.log(options.howManyCharacters);
    console.log(options.wantsLowercase);

    var total = [];

    var passwordPotential = [];

    var passwordFinal = [];


}

var password = "";


// for (var i = 0; i <= complexity; i++) {
//     password = password = values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
// }

var generatePasswordButton = document.querySelector('#generatePassword');
var copyToClipboardButton = document.querySelector('#CopytoClipboard');

generatePasswordButton.addEventListener('click', generatePassword);
copyToClipboardButton.addEventListener('click', copyPassword);

function copyPassword() {

    document.getElementById("CopytoClipboard").select();

    document.execCommand("Copy");
    alert("Password copied to Clipboard!");}