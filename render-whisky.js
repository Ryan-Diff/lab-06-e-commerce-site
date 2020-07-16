import { findById } from './utils.js';

export function renderWhiskey(whiskey) {
    const li = document.createElement('li');
    li.className = whiskey.category;
    li.title = whiskey.description;

    const h3 = document.createElement('h3');
    h3.textContent = whiskey.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = './assets/' + whiskey.image;
    img.alt = whiskey.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + whiskey.price.toFixed(2);
    // const usd = fruit.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    // console.log('button');
    button.textContent = 'Add';
    button.value = whiskey.id;
    button.addEventListener('click', () => {
        const emptyCart = '[]';
        const localCart = localStorage.getItem('CART') || emptyCart;
        const cart = JSON.parse(localCart);
        let whiskeyInCart = findById(cart, whiskey.id);
        if (whiskeyInCart) {
            whiskeyInCart.quantity++;

        } else {
            const newCart = {
                id: whiskey.id,
                quantity: 1
            };
            cart.push(newCart);
        }
        const stringyCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringyCart);
        alert('You Added one ' + whiskey.name + ' to your cart');
    });

    p.appendChild(button);

    li.appendChild(p);

    return li;
}
