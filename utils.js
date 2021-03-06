// import whiskey from "./Products/whiskey";

export function findById(items, id) {
    // loop the array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }

    // loop done, nothing found
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function getCart() {
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];
    return cart;
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, fruits) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const fruit = findById(fruits, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, fruit.price);
        orderTotal += lineTotal;
    }
    
    return roundCurrency(orderTotal);
}



export function addToCart(findById, whiskey){
    const cart = getCart();
    let whiskeyInCart = findById(cart, whiskey.id);
    if (!whiskeyInCart){
        cart.push({
            id: whiskey.id,
            quantity: 1
        });
    } else {
        whiskeyInCart.quantity++;
    }
    const newCart = JSON.stringify(cart);
    localStorage.setItem('cart', newCart);
    alert('You Added one ' + whiskey.name + 'to your cart');
}

export function clearCart(cart){
                                                              
    localStorage.clear('cart');
    alert('You placed your order of' + JSON.stringify(cart));
    window.location = '../';
}