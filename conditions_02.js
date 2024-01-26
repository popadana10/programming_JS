/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temperature) {
  // let promptInput = Number(prompt('give me a number'));
  // console.log(typeof promptInput);
    if (temperature < 15) {
        return ('Wear a jacket! It is cold outside.');
      } else {
       return ('No need to wear a jacket.');
      }
} 

getTemperature(Number(prompt('What is the current temperature?'))); 

// to be completed in the class. I can't figure it out. SOLVED

// temperature = Number(prompt('What is the current temperature in Celsius?'));
