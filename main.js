const productSelector= document.getElementById('product-selector');
const quantityInput= document.getElementById('quantity');
const totalPriceElement= document.getElementById('total-price');
const purchaseButton= document.getElementById('purchase-button');
const orderSummary= document.getElementById('order-summary'); //selecting by ID

function updateTotalPrice(){
    const selectedOption= productSelector.options[productSelector.selectedIndex]; //getting the selected option
    const productPrice= parseFloat(selectedOption.getAttribute('data-price')); //gettimg the price from the option's data attribute
    const quantity= parseInt (quantityInput.value); //converting the input from a string to an integer
    const totalPrice= productPrice * quantity; 
    totalPriceElement.textContent= `$${totalPrice.toFixed(2)}`;//updating the displayed price
}
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);//adding the event listeners


function handleOrderSubmission(){
    const selectedOption = productSelector.options[productSelector.selectedIndex].text;
    const selectedProduct= selectedOption.split('-')[0].trim(); //with the rest of my code, the page was displaying the product name as well as the hyphen and price after it. Using split and trim allows me to remove things I do not want to display
    const quantity=quantityInput.value; //this gets the quantity value
    const totalPrice=totalPriceElement.textContent;
    orderSummary.textContent= `You ordered ${quantity} of the ${selectedProduct} product. Its total price is: ${totalPrice}`;
}
purchaseButton.addEventListener('click', handleOrderSubmission); //adding an event listener

