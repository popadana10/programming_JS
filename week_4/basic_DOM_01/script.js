/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

/* const content = document.getElementById('content');

button.addEventListener('click', function changeTheText() {
    return content.textContent = "Hello, World!";
});

console.log(changeTheText());
*/

const content = document.getElementById('content');

function changeTheText() {
    return content.textContent = "Hello, World!";
}

console.log(document.getElementsByTagName('button').addEventListener('click', changeTheText));
