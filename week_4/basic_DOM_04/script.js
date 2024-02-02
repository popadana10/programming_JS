

    document.addEventListener('input', function() { 

        const typeSelect = document.getElementById("type");
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        const totalPriceSpan = document.getElementById("totalPrice");

        let basePrice = parseInt(typeSelect.value); //base price for pancakes

        function calculateTotalPrice() {
            let totalPrice = basePrice; //total price calculation
    
            checkboxes.forEach(function(checkbox) { // $1/each checked topping
                if (checkbox.checked) {
                    totalPrice += parseInt(checkbox.value);
                }
            });
    
            totalPriceSpan.textContent = "$" + totalPrice; //update display
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

    