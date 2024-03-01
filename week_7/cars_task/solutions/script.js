const addCarForm = document.querySelector('#addCar');

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

const addCar = (event) => {
    event.preventDefault();
    console.log('addCar is triggered');
};

addCarForm.addEventListener('submit', addCar);