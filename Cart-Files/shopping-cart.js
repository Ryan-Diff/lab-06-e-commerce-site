
import rederLineItem from '../render-line-items.js';
import whiskeyList from '../Products/whiskey.js';
import { findById, calcOrderTotal, toUSD, getCart, } from '../utils.js';
import whiskey from '../Products/whiskey.js';

const cart = getCart();
const orderButton = document.getElementById('orderButton');
const tBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');




for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i]; 
    const correctWhiskey = findById(whiskeyList, cartItem.id);
    const el = rederLineItem(cartItem, correctWhiskey);

    tBody.appendChild(el);
}

const orderTotal = calcOrderTotal(cart, whiskey);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0){
    orderButton.disabled = true;

} else { 
    orderButton.addEventListener('click', () => { 
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        localStorage.removeItem('CART');
        window.location = '../';
    });

}
    


