import cart from './cart.js';
import rederLineItem from './render-line-items.js';
import whiskeyList from './whiskey.js';
import { findById } from './utils.js';

const tBody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i]; 
    const correctWhiskey = findById(whiskeyList, cartItem.id);
    const el = rederLineItem(cartItem, correctWhiskey);

    tBody.appendChild(el);
}