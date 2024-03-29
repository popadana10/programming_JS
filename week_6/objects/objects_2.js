/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
const library = {
     books: [
    {
        title: 'A Little Life', 
        author:'Hanya Yanagihara', 
        yearPublished:'2015'
    },

    {
        title: 'Wuthering Heights',
        author:'Emily Brontë', 
        yearPublished:'1847'
    },

    {
        title: 'The Orchid House', 
        author:'Lucinda Riley ', 
        yearPublished:'2010'
    },

    {
        title: 'The Forgotten Garden', 
        author:'Kate Morton',
        yearPublished:'2008'
    },

    {
        title:'After the Funeral', 
        author:'Agatha Christie', 
        yearPublished:'1953'
    },

    {
        title: 'Pride and Prejudice', 
        author:'Jane Austen', 
        yearPublished:'1813'
    },

]

};
 
library.books.push({
    title: 'Anna Karenina',
    author: ' Leo Tolstoy',
    yearPublished: '1878'
});

library.books.push({
    title: 'Frankenstein',
    author: 'Mary Shelley',
    yearPublished: '1818'
});

console.log(library);


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log('A Little Life', library.books[0].title);
library.books[1].yearPublished = 1848;
console.log('updated book object:', library.books[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library.books[0].genres = ['Fiction', 'Drama'];
library.books[0]['isAvailable'] = true;

console.log(library.books[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
function Book(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}

const newBook = new Book('The Glass Castle', 'Jeannette Walls', 2005, ['Memoir', 'Biography']);
library.books.push(newBook);

console.log(library);


/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres) {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres
    };
}
const anotherNewBook = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, ['Fiction', 'Classic']);

console.log(anotherNewBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
const libraryJSON = JSON.stringify(library);

console.log('Library collection as JSON:');
console.log(libraryJSON);

const parsedLibrary = JSON.parse(libraryJSON);

console.log('Title of the first book in the parsed library:');
console.log(parsedLibrary.books[0].title);