/* 
Create functionality where an input field's value is continuously displayed and updated in a dedicated area on the page as the user types, using the onchange event.*/

/* 

Instructions:

HTML:
- Make a basic HTML
- Include an <input type="text"> element where the user can enter text.
- Add a <div> element with an ID (e.g., id="displayText"), which will be used to display the input field's value.
- Remember to connect HTML and JS files

JavaScript:

Write JavaScript code that adds an event listener to the input field, specifically listening for the change event. 

The event listener's function should:
1. Retrieve the current value from the input field.
2. Update the textContent of the displayText <div> to match the input field's value.
- To have the display update more dynamically (as the user types), consider using the input event instead of or in addition to the change event.  */


document.addEventListener('input', updateDisplay); // if using 'vhange' it types slower because it updates after changing the action 

const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");

function updateDisplay() { 

    inputField.addEventListener('input', inputDisplay);
    
    function inputDisplay() {

        const inputValue = inputField.value; // 1

        displayText.textContent = inputValue; // 2
    };
};

/*

// from the class code  option 

const input = document.querySelector('#text');
const text = document.querySelector('#displayText');

const changeText = () => {
    console.log(input.value);
    text.textContent = input.value;
};

// input.addEventListener('change', changeText);  change is good for select, check boxes 'wait until I get away'
input.addEventListener('input', changeText);

*/