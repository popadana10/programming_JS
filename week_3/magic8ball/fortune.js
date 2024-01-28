// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. 
// The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. 
// Implement the program using conditional statements to select and display one of several predefined responses.


// Define possible responses

const responses = [
    "Outlook not so good, but hey, who trusts a fortune teller anyway?",
    "Reply hazy, ask again after you've had your morning coffee.",
    "Cannot predict now, I'm too busy contemplating the mysteries of the universe.",
    "Signs point to... why are you asking me? You should know better!",
    "My sources say no, but my intuition says 'maybe if you ask nicely'.",
    "Ask again later, I'm currently on vacation in the Bermuda Triangle.",
    "Don't count on it, unless you're counting on me to give you cryptic responses.",
    "Outlook not so good, unless you're looking for excuses to procrastinate.",
    "My reply is no, but don't worry, rejection builds character!",
    "Very doubtful, just like the likelihood of finding matching socks in your laundry."
];

// Function to generate a random response
function generateResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Function to handle user input and display response
function fortuneTeller() {
    const question = prompt("Ask your Fortune Teller a yes-or-no question:");
    if (question) {
        const response = generateResponse();
        alert("The Fortune Teller says: " + response);
    } else {
        alert("You didn't ask anything!");
    }
}

// Get the button element
const button = document.getElementById('button');

// Add an event listener to the button
button.addEventListener('click', fortuneTeller);

// Call the fortuneTeller function to start the program
fortuneTeller();

// Credits to Stack Overfloww

