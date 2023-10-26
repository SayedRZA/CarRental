
  document.addEventListener("DOMContentLoaded", function () {
    // Select the HTML elements
    const pickupDateInput = document.getElementById("pickupDate");
    const numberOfDaysInput = document.getElementById("numberOfDays");
    const electronicTollTagCheckbox = document.getElementById("electronicTollTag");
    const gpsCheckbox = document.getElementById("gPS");
    const roadSideAssistanceCheckbox = document.getElementById("roadSideAssistance");
    const under25YesRadio = document.getElementById("under25Yes");
    const under25NoRadio = document.getElementById("under25No");
    const orderButton = document.getElementById("orderButton");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");

    // Add a click event listener to the "Estimate" button
    orderButton.addEventListener("click", function () {
      // Calculate the base price
      let basePrice = 29.99 * parseInt(numberOfDaysInput.value, 10);

      // Calculate the total cost based on selected options
      let optionsPrice = 0;
      if (electronicTollTagCheckbox.checked) {
        optionsPrice += 3.95 * parseInt(numberOfDaysInput.value, 10);
      }
      if (gpsCheckbox.checked) {
        optionsPrice += 2.95 * parseInt(numberOfDaysInput.value, 10);
      }
      if (roadSideAssistanceCheckbox.checked) {
        optionsPrice += 2.95 * parseInt(numberOfDaysInput.value, 10);
      }

      // Calculate the under 25 surcharge
      let under25Surcharge = 0;
      if (under25YesRadio.checked) {
        under25Surcharge = 0.3 * basePrice;
      }

      // Calculate the total price
      let totalPrice = basePrice + optionsPrice + under25Surcharge;

      // Display the total price
      totalPriceDisplay.textContent = "$" + totalPrice.toFixed(2);
    });
  });

