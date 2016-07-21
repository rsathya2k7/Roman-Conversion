/* To check and get the perfect value */
QUnit.test( "Conversion Check", function( assert ) {

 var romanLetters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 var numericalLetters = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

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

  var result = getRoman( 10, function( x ) {
    assert.ok( true, "getRoman() calls operation function" );
    return romanNumeral;
  });

  assert.equal( result, "X", "Success - passed" );
});


/* To check and get the perfect validation */
QUnit.test("Zero Validation Check", function( assert ) {

function toCheckRoman(value) {
     var romanNumeral = '';
     if (value == 0) {
         romanNumeral = "The value must be greater than zero";
     }
     return romanNumeral;
 }

  var result = toCheckRoman( 0, function( x ) {
    assert.ok( true, "toCheckRoman() calls operation function" );
    return romanNumeral;
  });

  assert.equal( result, "The value must be greater than zero", "The value must be greater than zero - passed" );
});

/* To check and get the perfect validation */
QUnit.test("Max Validation Check", function( assert ) {

function toCheckRoman(value) {
     var romanNumeral = '';
     if (value > 3000) {
         romanNumeral  = "The value less than 3000";
     }
     return romanNumeral;
 }

  var result = toCheckRoman( 3001, function( x ) {
    assert.ok( true, "toCheckRoman() calls operation function" );
    return romanNumeral;
  });

  assert.equal( result, "The value less than 3000", "The value less than 3000 - passed" );
});

/* To check empty validation */
QUnit.test("Empty Validation Check", function( assert ) {

function toCheckRoman(value) {
     var romanNumeral = '';
     if (value == "") {
         romanNumeral  = "The value should not be empty";
     }
     return romanNumeral;
 }

  var result = toCheckRoman( "", function( x ) {
    assert.ok( true, "toCheckRoman() calls operation function" );
    return romanNumeral;
  });

  assert.equal( result, "The value should not be empty", "The value should not be empty - passed" );
});

/* To check number validation */
QUnit.test("Number Validation Check", function( assert ) {

function toCheckRoman(value) {
     var romanNumeral = '';
     if (value == "ABC") {
         romanNumeral  = "The value is not a number";
     }
     return romanNumeral;
 }

  var result = toCheckRoman( "ABC", function( x ) {
    assert.ok( true, "toCheckRoman() calls operation function" );
    return romanNumeral;
  });

  assert.equal( result, "The value is not a number", "The value is not a number - passed" );
});