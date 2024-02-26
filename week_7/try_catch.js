'use strict';

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
    try {
        throw new Error('Oops, something went wrong!');
    } catch (error) {
        console.log(error.message);
    }
} 
task1();