function renderWhisky(fruit) {
    const li = document.createElement('li');
    li.className = fruit.category;
    li.title = fruit.description;

    const h3 = document.createElement('h3');
    h3.textContent = fruit.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + fruit.image;
    img.alt = fruit.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + fruit.price.toFixed(2);
    // const usd = fruit.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = fruit.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderWhisky;