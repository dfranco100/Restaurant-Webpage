function calculateBill(){
 // get all the menu items checkboxes and input fields
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const quantityInputs = document.querySelectorAll('input[type=number]');
  const tipInput = document.querySelector('input[name=tip]');
  
  // initialize cost
  let itemCost = 0;
  let totalCost = 0;
  
  // loop through all the checked checkboxes and add up the total cost
  checkboxes.forEach((checkbox, index ) => {
    if (checkbox.checked) {
      const quantity = parseInt(quantityInputs[index].value);
      const price = parseInt(checkbox.value);
      itemCost = quantity * price;
      totalCost = itemCost + totalCost;
    }
  });

  const tip = parseFloat(tipInput.value);
  if (tip != 0) {
    grandTotal = totalCost + tip;
  }

    // output the total cost to the HTML page
    const outputTotal = document.querySelector('#total');
    outputTotal.textContent = `Total Order: $${totalCost.toFixed(2)}`;

    //output tip amount 
    const outputTip = document.querySelector('#tip');
    outputTip.textContent = `Tip: $${tip.toFixed(2)}`;

    //output grand total 
    const outputGrand = document.querySelector('#grandTotal');
    outputGrand.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}