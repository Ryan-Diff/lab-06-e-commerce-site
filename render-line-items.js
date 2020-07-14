import { toUSD } from './utils.js';

function rederLineItem(lineItem, whiskey) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.classname = 'align-left';
    nameCell.textContent = whiskey.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(whiskey.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.classname = 'line-item-total';
    const total = lineItem.quantity * whiskey.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}

export default rederLineItem;