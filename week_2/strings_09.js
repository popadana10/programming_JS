/**
Refine the getFullName function so that it returns the person's full name by utilizing string interpolation.
 */

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName('Sam', 'Doe')); // "Sam Doe"
console.log(getFullName('Alex', 'Blue')); // "Alex Blue"