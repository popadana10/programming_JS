/*

    document.addEventListener('input', function() { 

        const typeSelect = document.getElementById("type");
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        const priceDisplaySpan = document.querySelector(".price-display span");
        const totalPriceSpan = document.getElementById("totalPrice");

        let basePrice = parseInt(typeSelect.value); //base price for pancakes

        function calculateTotalPrice() {
            let totalPrice = basePrice; //total price calculation
    
            checkboxes.forEach(function(checkbox) { // $1/each checked topping
                if (checkbox.checked) {
                    totalPrice += parseInt(checkbox.value);
                }
            });

            priceDisplaySpan.textContent = "€" + totalPrice;
            totalPriceSpan.textContent = "€" + totalPrice; //update display
        }
    
        typeSelect.addEventListener("change", function() {//changes in the select box
            basePrice = parseInt(this.value);
            calculateTotalPrice();
        });
    
        checkboxes.forEach(function(checkbox) { //changes in all checkboxes
            checkbox.addEventListener("change", calculateTotalPrice);
        });
    
    });
    
    console.log(calculateTotalPrice());

*/


const form = document.querySelector('.form-container');

const priceCalc = () => {
    // console.log('frwbfv');

    const typeSelect = document.querySelector('#type');
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const priceBanner = document.getElementById("totalPrice");

    // console.log(typeSelect.value);
    // console.log(checkboxes);

    let totalAmount = parseInt(typeSelect.value);
    // console.log(totalAmount);

    for (const checkbox of checkboxes){
        if (checkbox.checked) {
            totalAmount += parseInt(checkbox.value);
        }
    }
    priceBanner.textContent = `€{totalAmount}`;
};

form.addEventListener('change', priceCalc);
