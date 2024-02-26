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

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
   try {console.log(fox);
} catch (error) {
    console.log(error);
}
  }
task2();

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
    try {
        console.log('Inside try block');
        console.log(fox);
        throw new Error('Test error');
    } catch (error) {
        console.log('Error caught');
    } finally {
        console.log('Execution completed')
    }
  }

  task3();