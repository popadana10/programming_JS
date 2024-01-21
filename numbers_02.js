// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

//console.log(fahrenheitToCelsius(21)); // "-6,1"

let Fahrenheit = 75;
let fahrenheitToCelsius = (Fahrenheit - 32) * 5/9; 
let Celsius = Math.round(fahrenheitToCelsius);

console.log(fahrenheitToCelsius);
console.log(Celsius);