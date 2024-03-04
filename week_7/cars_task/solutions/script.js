'use strict';

const addCarForm = document.querySelector('#addCar');
const searchForm = document.querySelector('#searchForm');

const cars = [];

class Car {
    constructor ( licence, maker, model, owner, price, color) {
        this.licence = licence,
        this.maker = maker,
        this.model = model,
        this.owner = owner, 
        this.price = price,
        this.color = color;
    }
}

const addCar = (e) => {
    e.preventDefault();

    const licence = document.querySelector('#licence').value;
    const maker = document.querySelector('#maker').value;
    const model = document.querySelector('#model').value;
    const owner = document.querySelector('#owner').value;
    const price = document.querySelector('#price').value;
    const color = document.querySelector('#color').value;

const newCar = new Car(licence, maker, model, price, color);
cars.push(newCar);
displayTable();

addCarForm.reset();

};

const displayTable =() => {
    const table = document.querySelector('#carsTable');

    table.innerHTML = table.rows[0].innerHTML;

    cars.forEach(car => {
        const row = table.insertRow(-1);

        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text; 
        });
    });
};

const searchCar = (e) => {
    e.preventDefault();
    const licenceQuery = document.querySelector('#search').value.trim().toLowerCase();

    const display = document.querySelector('#searchResult');

    if (!licenceQuery) {
        display.textContent = 'Please enetr a licence plate to search';
        return;
    }

    try {

        cars.find(({licence}) => 
        licence.toLowerCase().includes(licenceQuery)
        );

        display.textContent = result ? `Found ${result.make}, ${result.model}, owned by ${owner}` : `No car with that licence plate`;
    } catch (error) {
        console.error('Error occured:', error);
        display.textContent = 'Something went wrong, try again';
    }

    display.textContent = licenceQuery;
    console.log(licenceQuery);
}

addCarForm.addEventListener('submit', addCar);
searchForm.addEventListener('submit', searchCar);

