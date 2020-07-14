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
    button.textContent = 'Add';
    button.value = whiskey.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
