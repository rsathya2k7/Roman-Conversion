 var romanLetters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 var numericalLetters = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

/* To get the expected value - as per the value */
 function getRoman(value) {
     var romanNumeral = "";
     for (var i = 0; i < romanLetters.length; i++) {
         while (value >= numericalLetters[i]) {
             value -= numericalLetters[i];
             romanNumeral += romanLetters[i];
         }
     }
     return romanNumeral;
 }

/* To check the validation - min 0 and max 3000 and success */
 function toCheckRoman(value) {
     var romanNumeral = '';
     if (value <= 0) {
         document.getElementById("errorMessage").innerHTML = "Please enter the value as greater than zero";
     } else if (value > 3000) {
         document.getElementById("errorMessage").innerHTML = "Please enter the value less than 3000";
     } else {
         var romanNumeral = getRoman(value);
     }
     return romanNumeral;
 }

/* This convert function - getting the value with the help of id */
 function convert() {
     var dec = document.getElementById('decimalVal');
     if (dec.value.length == 0) {
         document.getElementById("errorMessage").innerHTML = "Empty not allowed";
     } else if (isNaN(dec.value) === true) {
         document.getElementById("errorMessage").innerHTML = "This value is not a number";
     } else if (dec.value.length > 0) {
         document.getElementById("errorMessage").innerHTML = "";
         document.getElementById('romanVal').value = toCheckRoman(dec.value);
     }
 }