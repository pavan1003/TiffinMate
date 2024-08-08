var tiffinItemsList = [
  "Roti (Indian flatbread)",
  "Tomato Sabzi (vegetable curry)",
  "Dal (lentil curry)",
  "Rice",
  "Pickles",
  "Salad",
  "Raita (yogurt side dish)",
  "Sambar (South Indian lentil soup)",
  "Idli (steamed rice cake)",
];
var itemIngredientsMap = {
  "Roti (Indian flatbread)": {
    12: [
      { ingredient: "Flour", amount: "200 g" },
      { ingredient: "Water", amount: "100 ml" },
      { ingredient: "Salt", amount: "5 g" },
    ],
    8: [
      { ingredient: "Flour", amount: "150 g" },
      { ingredient: "Water", amount: "75 ml" },
      { ingredient: "Salt", amount: "3 g" },
    ],
  },
  "Tomato Sabzi (vegetable curry)": {
    12: [
      { ingredient: "Tomatoes", amount: "500 g" },
      { ingredient: "Onions", amount: "200 g" },
      { ingredient: "Spices", amount: "10 g" },
    ],
    8: [
      { ingredient: "Tomatoes", amount: "300 g" },
      { ingredient: "Onions", amount: "150 g" },
      { ingredient: "Spices", amount: "5 g" },
    ],
  },
  "Dal (lentil curry)": {
    12: [
      { ingredient: "Lentils", amount: "300 g" },
      { ingredient: "Spices", amount: "10 g" },
      { ingredient: "Tomatoes", amount: "200 g" },
    ],
    8: [
      { ingredient: "Lentils", amount: "200 g" },
      { ingredient: "Spices", amount: "5 g" },
      { ingredient: "Tomatoes", amount: "100 g" },
    ],
  },
  Rice: {
    12: [
      { ingredient: "Rice", amount: "400 g" },
      { ingredient: "Water", amount: "800 ml" },
    ],
    8: [
      { ingredient: "Rice", amount: "250 g" },
      { ingredient: "Water", amount: "500 ml" },
    ],
  },
  Pickles: {
    12: [
      { ingredient: "Vegetables", amount: "300 g" },
      { ingredient: "Spices", amount: "20 g" },
      { ingredient: "Oil", amount: "50 ml" },
    ],
    8: [
      { ingredient: "Vegetables", amount: "200 g" },
      { ingredient: "Spices", amount: "10 g" },
      { ingredient: "Oil", amount: "30 ml" },
    ],
  },
  Salad: {
    12: [
      { ingredient: "Lettuce", amount: "200 g" },
      { ingredient: "Tomatoes", amount: "150 g" },
      { ingredient: "Cucumbers", amount: "150 g" },
    ],
    8: [
      { ingredient: "Lettuce", amount: "100 g" },
      { ingredient: "Tomatoes", amount: "75 g" },
      { ingredient: "Cucumbers", amount: "75 g" },
    ],
  },
  "Raita (yogurt side dish)": {
    12: [
      { ingredient: "Yogurt", amount: "300 g" },
      { ingredient: "Cucumbers", amount: "150 g" },
      { ingredient: "Spices", amount: "10 g" },
    ],
    8: [
      { ingredient: "Yogurt", amount: "200 g" },
      { ingredient: "Cucumbers", amount: "100 g" },
      { ingredient: "Spices", amount: "5 g" },
    ],
  },
  "Sambar (South Indian lentil soup)": {
    12: [
      { ingredient: "Lentils", amount: "400 g" },
      { ingredient: "Vegetables", amount: "300 g" },
      { ingredient: "Tamarind", amount: "30 g" },
      { ingredient: "Spices", amount: "15 g" },
    ],
    8: [
      { ingredient: "Lentils", amount: "250 g" },
      { ingredient: "Vegetables", amount: "150 g" },
      { ingredient: "Tamarind", amount: "20 g" },
      { ingredient: "Spices", amount: "10 g" },
    ],
  },
  "Idli (steamed rice cake)": {
    12: [
      { ingredient: "Rice", amount: "200 g" },
      { ingredient: "Lentils", amount: "100 g" },
      { ingredient: "Salt", amount: "5 g" },
    ],
    8: [
      { ingredient: "Rice", amount: "150 g" },
      { ingredient: "Lentils", amount: "75 g" },
      { ingredient: "Salt", amount: "3 g" },
    ],
  },
};

window.onload = function () {
  //Global variables
  var btnAddItems = document.getElementById("btn-add-items");
  var btnGenerate = document.getElementById("btn-generate");
  var btnPrint = document.getElementById("btn-print");
  var btnGenerateNew = document.getElementById("btn-generate-new");
  var tiffinsInput = document.getElementById("tiffins");
  var tiffinItemsInput = document.getElementById("tiffinItems");
  var itemsContainer = document.getElementById("items");
  var report = document.getElementById("output");
  var infoCard = document.getElementById("info-card");

  function addItems() {
    //Varibales
    var errorMessageTiffins = document.getElementById("error-tiffins");
    var errorMessageItems = document.getElementById("error-items");
    var tiffinItems = parseInt(tiffinItemsInput.value);
    var tiffins = parseInt(tiffinsInput.value);
    var itemsHTML = "";

    // Reset previous error messages and background validation colors
    errorMessageTiffins.innerHTML = "";
    errorMessageItems.innerHTML = "";
    errorMessageTiffins.classList.remove("error-message");
    errorMessageItems.classList.remove("error-message");

    tiffinsInput.style.backgroundColor = "";
    tiffinItemsInput.style.backgroundColor = "";

    // Validate if number of tiffins is a positive integer
    if (isNaN(tiffins) || tiffins <= 0 || !Number.isInteger(tiffins)) {
      // Display error message
      errorMessageTiffins.innerHTML =
        "Please enter a valid positive integer for the number of tiffins.";
      errorMessageTiffins.classList.add("error-message");
      // Change background color to red
      tiffinsInput.style.backgroundColor = "red";
      return;
    }

    // Validate if tiffinItems is a positive integer
    if (isNaN(tiffinItems) || tiffinItems <= 0 || tiffinItems > tiffinItemsList.length) {
      // Display error message
      errorMessageItems.innerHTML = `Please enter a valid positive integer less than ${tiffinItemsList.length} for the number of items.`;
      errorMessageItems.classList.add("error-message");
      // Change background color to red
      tiffinItemsInput.style.backgroundColor = "red";
      return;
    }

    itemsContainer.innerHTML = "";
    // Render Items dynamically according to number of items.
    for (var i = 1; i <= tiffinItems; i++) {
      var optionsHTML = "";
      tiffinItemsList.forEach((item) => {
        optionsHTML += `<option value="${item}">${item}</option>`;
      });
      itemsHTML += `
      <div class="item form-input">
        <label for="item${i}">Item ${i}:</label>
        <select id="item${i}" class="input-box">
          <option value="">Select Item ${i}</option>
          ${optionsHTML}
        </select>
        <div class="selection">
          <div class="radio-container">
            <div class="radio-btn">
              <input type="radio" id="quantityRadio${i}" name="option${i}" value="quantityRadio">
              <label for="quantityRadio${i}">Quantity of Item ${i}</label>
            </div>
            <input class="input-box" type="number" id="quantityValue${i}" placeholder="Number of item ${i} per tiffin" style="display:none;">
          </div>
          <span>--- or ---</span>
          <div class="radio-container">
            <div class="radio-btn">
              <input type="radio" id="container${i}" name="option${i}" value="container">
              <label for="container${i}">Select Container Size</label>
            </div>
            <div id="containers${i}" style="display:none;">
              <input type="radio" id="12oz-Item${i}" name="container${i}" value="12">
              <label for="12oz-Item${i}">12oz</label>
              <input type="radio" id="8oz-Item${i}" name="container${i}" value="8">
              <label for="8oz-Item${i}">8oz</label>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    // Append the generated HTML to the itemsContainer
    itemsContainer.innerHTML = itemsHTML;

    btnGenerate.style.display = "block";

    // Add event listeners to toggle display of quantity input

    // used let instead of var to allow dynamic selection of items as var reuses the same instance of the variable making
    // the quantityRadio and Conatiners selection to always appear at last of items list. This happens becuase var has the 
    // last stored value at the end of loop and let has all the values of each loop iteration.
    for (let i = 1; i <= tiffinItems; i++) {
      let quantityRadio = document.getElementById(`quantityRadio${i}`);
      let valueInput = document.getElementById(`quantityValue${i}`);
      let containerRadio = document.getElementById(`container${i}`);
      let containers = document.getElementById(`containers${i}`);

      quantityRadio.addEventListener("change", function () {
        containers.style.display = "none";
        valueInput.style.display = "block";
      });

      containerRadio.addEventListener("change", function () {
        valueInput.style.display = "none";
        containers.style.display = "block";
      });
    }
  }

  function generate() {
    //Variables
    var tiffins = parseInt(tiffinsInput.value);
    var tiffinItems = parseInt(tiffinItemsInput.value);

    var output = "<h1>TiffinMate Report</h1>";
    var errorMessage = '<h2 class="error-message">Solve the Errors to generate a report</h2> ';
    var totalIngredients = {};
    var totalItemsQuantity = {};
    var errorFlag = false;

    // Iterate over each selected item and display its ingredient list
    for (var i = 1; i <= tiffinItems; i++) {
      var itemName = document.getElementById(`item${i}`).value;
      var isContainerSelected = document.getElementById(`container${i}`).checked;
      var isQuantitySelected = document.getElementById(`quantityRadio${i}`).checked;

      if (!itemName) {
        errorMessage += `<p class="error-message">Please select an item for Tiffin ${i}.</p>`;
        errorFlag = true;
      } else {
        // If quantity is selected, calculate total quantity
        if (isQuantitySelected) {
          var quantityInput = document.getElementById(`quantityValue${i}`).value;
          if (!quantityInput) {
            errorMessage += `<p class="error-message">Please enter quantity for ${itemName} in Tiffin ${i}.</p>`;
            errorFlag = true;
          } else {
            output += `<p><strong>Item ${i}: ${itemName}</strong></p>`;
            var totalQuantity = parseFloat(quantityInput) * tiffins;
            // Update totalItemsQuantity object
            totalItemsQuantity[itemName] = (totalItemsQuantity[itemName] || 0) + totalQuantity;
          }
        }

        // If a container size is selected, display ingredients accordingly
        else if (isContainerSelected) {
          var container12oz = document.getElementById(`12oz-Item${i}`);
          var container8oz = document.getElementById(`8oz-Item${i}`);
          var selectedContainer = container12oz.checked ? "12" : container8oz.checked ? "8" : null;

          if (!selectedContainer) {
            errorMessage += `<p class="error-message">Please select a container size for ${itemName} in Tiffin ${i}.</p>`;
            errorFlag = true;
          } else {
            // Add ingredients based on container size
            output += `<p><strong>Item ${i}: ${itemName}</strong></p>`;
            var ingredientsForContainer = itemIngredientsMap[itemName][selectedContainer];
            output += `<ul>`;
            ingredientsForContainer.forEach(({ ingredient, amount }) => {
              output += `<li>${ingredient}: ${amount}</li>`;
              // Update totalIngredients object
              amountSplit = amount.split(" ");
              totalIngredients[ingredient] =
                (parseFloat(totalIngredients[ingredient]) || 0) +
                parseFloat(amountSplit[0]) +
                " " +
                amountSplit[1];
            });
            output += `</ul>`;
          }
        } else {
          errorMessage += `<p class="error-message">Please select quantity or container size for ${itemName}.</p>`;
          errorFlag = true;
        }
      }
    }

    // Display error if any
    if (errorFlag) {
      report.style.display = "block";
      report.innerHTML = errorMessage;
      return;
    }

    // Proceed with calculation only if there are no errors
    document.getElementById("input-wrapper").style.display = "none";

    // Display total quantity of each item
    if (Object.keys(totalItemsQuantity).length !== 0) {
      output += `<h2>Total Quantity of Each Item:</h2>`;
      output += `<ul>`;
      for (var item in totalItemsQuantity) {
        var totalQuantity = totalItemsQuantity[item];
        output += `<li>${item}: ${totalQuantity}</li>`;
      }
      output += `</ul>`;
    }
    // Calculate total amount of ingredients required for total number of tiffins
    if (Object.keys(totalIngredients).length !== 0) {
      output += `<h2>Total Ingredients Required for ${tiffins} Tiffins:</h2>`;
      output += `<ul>`;
      for (var ingredient in totalIngredients) {
        var totalAmountSplit = totalIngredients[ingredient].split(" ");
        var totalAmount = parseFloat(totalAmountSplit[0]) * tiffins;
        output += `<li>${ingredient}: ${totalAmount} ${totalAmountSplit[1]}</li>`;
      }
      output += `</ul>`;
    }
    // Display the report and Buttons
    report.style.display = "block";
    report.innerHTML = output;

    btnPrint.style.display = "block";
    btnGenerateNew.style.display = "block";
  }

  // Function to Print
  function exportReport() {
    window.print();
  }

  function resetReport() {
    // Reset form inputs
    tiffinsInput.value = "";
    tiffinItemsInput.value = "";
    itemsContainer.innerHTML = "";

    // Hide the report section
    report.innerHTML = "";
    report.style.display = "none";

    // Hide buttons
    btnPrint.style.display = "none";
    btnGenerate.style.display = "none";
    btnGenerateNew.style.display = "none";

    //show Form
    document.getElementById("input-wrapper").style.display = "block";
  }

  //listeners
  btnAddItems.onclick = addItems;
  btnGenerate.onclick = generate;
  btnPrint.onclick = exportReport;
  btnGenerateNew.onclick = resetReport;

  //Modal exit on click outside the box
  window.onclick = function (event) {
    if (event.target == infoCard) {
      infoCard.style.display = "none";
    }
  };

  //Modal open/close
  document.getElementById("info").onclick = function () {
    infoCard.style.display = "block";
  };
  document.getElementsByClassName("close")[0].onclick = function () {
    infoCard.style.display = "none";
  };
};
