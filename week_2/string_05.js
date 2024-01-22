/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */

function getLastCharacter(name) {
    return name.substring(2, 3);
} 


console.log(getLastCharacter('Sam')); // "m"
// console.log(getLastCharacter('Alex')); // "x"
// console.log(getLastCharacter('Charley')); // "y"

/* It can be done using Character Access as well

let language = 'JavaScript';
console.log(language[0]);

return name[2]; */