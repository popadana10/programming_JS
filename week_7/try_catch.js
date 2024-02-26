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
node 

  // Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
    try {
        console.log('Outer try block');
        console.log(fox)
        try {
            throw new Error('Nested error occured');
    } catch (error) {
        console.log('Nested catch block', error.message);
    }
    } catch (error) {
        console.log('Outer catch block', error.message);
    }
  }
  task4();