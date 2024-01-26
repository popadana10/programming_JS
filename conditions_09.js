// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. 
// The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. 
// Implement the program using conditional statements to select and display one of several predefined responses.

/* function fortuneTeller(answer) {
    answer = ( "Outlook not so good!", "Most likely...");
    return answer;
}
fortuneTeller(prompt('Ask a question here:')); */



let randomNumber = Math.floor(Math.random() * 8);

function fortuneTeller(randomNumber) {

    let randomNumber = Math.floor(Math.random() * 8);

    if (randomNumber === 0) {
        console.log("It is certain!");
        
        } else if (randomNumber === 1) {
        console.log("Most likely!");

    } else if (randomNumber === 2) {
        console.log("Outlook not so good!");

    } else if (randomNumber === 3) {
        console.log("Ask again later!");

    } else if (randomNumber === 4) {
        console.log("Very doubtful");

    } else if (randomNumber === 5) {
        console.log("Cannot predict at the moment.");

    } else if (randomNumber === 6) {
        console.log("Yes definetly!");

    } else if (randomNumber === 7) {
        console.log("My answer for you is NO");

    } else (randomNumber === 8) 
        console.log("Signs point to NO for you.");

}

fortuneTeller(prompt('Ask any question and you shall receive an answer:'));

// prompst, switch, random number