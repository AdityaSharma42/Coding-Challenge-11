const sizeselector= document.getElementById('size-selector');
const quantityInput= document.getElementById('quantity');
const totalPriceElement= document.getElementById('total-price');
const purchaseButton= document.getElementById('purchase-button');
const orderSummary= document.getElementById('order-summary');

function updateTotalPrice(){
    constproductPrice= parseFloat(selectedOption.getAttribute('data-price'));
    const quantity= parseInt (quantityInput.value);
    const totalPrice= productPrice*quantity;
    totalPriceElement.textContent= `$${totalPrice.toFixed(2)}`;

}