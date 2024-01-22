/**
Refine the concatInitials function to return a string that combines the firstNameInitial followed by the lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial[0] + lastNameInitial[0];
}

console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"