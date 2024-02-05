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

function changeTheText() {
    const content = document.getElementById('content');
    return content.textContent = "Hello, World!";
}

console.log(document.getElementsByTagName('button').addEventListener('click', changeTheText));


/*
// alert('hsgdjhs') // check if the console is connected

const textChanger = () => {
    const textPlaceholder = document.getElementByID('content');
    textPlaceholder.textContent ='Hello, World!';
}

console.log(textPlaceholder.textContent);

//shortest version
const textChanger = () =>
(document.getElementByID('content').textContent = 'Hello, World!');


// if you you make a function you have to trigger it from HTML
*/
