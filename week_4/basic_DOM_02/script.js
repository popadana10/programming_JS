/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

    document.querySelector('#addFruitBtn').addEventListener('click', function addFruitToList() {

        const inputValue = document.querySelector('#fruitInput'); //selecting the ID 
        const fruitList = document.querySelector('#fruitList'); // selecting the ID

        const newFruit = document.createElement('li'); 
        const newFruitName = document.createTextNode(inputValue.value); 

        newFruit.appendChild(newFruitName); //appendChild() is a method that adds a node at the end of the list of children of a given parent
        fruitList.appendChild(newFruit);
        
        inputValue.value = ''; // to clear the input field after clicking the btn
    });

    console.log(addFruitToList());

    // VICTOOOOOORYYYYYYYY!!!!! YEEES!!


/*
// class version
    const button = document.querySelector('#addFruitBtn');

    const addDetails = () => {
        const input = document.querySelector('#fruitInput');
        const fruitList = document.querySelector('#fruitList');
       //  alert('it works!');

       if (fruitInput) {
        const newLi = document.createElement('li');
       newLi.textContent = fruitInput.value.trim();
       fruitList.appendChild(newLi);

       fruitInput.value = '';
       } else { alert ( 'Please entera fruit name!');
     }
    };

    button.addEventListener('click', addDetails) // this way, without adding the brackets to the ufnctions it will waitt until you click the btn to show the alert.
*/