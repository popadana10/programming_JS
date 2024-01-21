let number = 2.34567;
let limitedNumber = number.toFixed(2); // "2.35" as a string

// Convert back to a number if needed
limitedNumber = parseFloat(limitedNumber); // 2.35 as a number
console.log(limitedNumber);