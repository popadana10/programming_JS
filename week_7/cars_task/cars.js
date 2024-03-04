'use strict';

class Car {
    constructor(licensePlate, maker, model, owner, price, color) {
      this.licensePlate = licensePlate;
      this.maker = maker;
      this.model = model;
      this.owner = owner;
      this.price = price;
      this.color = color;
    }
  }
  
  const cars = [];
  
  function displayCars() {
    const carTableBody = document.getElementById('carTableBody');
    carTableBody.innerHTML = '';
    cars.forEach(car => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${car.licensePlate}</td>
        <td>${car.maker}</td>
        <td>${car.model}</td>
        <td>${car.owner}</td>
        <td>${car.price}</td>
        <td>${car.color}</td>
      `;
      carTableBody.appendChild(row);
    });
  }
  
  function searchCar() {
    const searchPlate = document.getElementById('searchPlate').value;
    try {
      const car = searchCarByLicensePlate(searchPlate);
      if (car) {
        displaySearchResult(car);
      } else {
        throw new Error('No car found with that license plate.');
      }
    } catch (error) {
      displayError(error.message);
    }
  }
  
  function searchCarByLicensePlate(licensePlate) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].licensePlate === licensePlate) {
        return cars[i];
      }
    }
    return null;
  }
  
  function displaySearchResult(car) {
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = `Make: ${car.maker}, Model: ${car.model}, Owner: ${car.owner}`;
  }
  
  function displayError(message) {
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = message;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const carForm = document.getElementById('carForm');
  
    carForm.addEventListener('submit', function(event) {
      event.preventDefault();
    
      const licensePlate = document.getElementById('licensePlate').value;
      const maker = document.getElementById('maker').value;
      const model = document.getElementById('model').value;
      const owner = document.getElementById('owner').value;
      const price = document.getElementById('price').value;
      const color = document.getElementById('color').value;
  
      const car = new Car(licensePlate, maker, model, owner, price, color);
      cars.push(car);
  
      displayCars();
      carForm.reset();
    });
  });
  