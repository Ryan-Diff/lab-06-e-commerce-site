import { renderWhiskey } from '../render-whisky.js';
import { calcOrderTotal, calcLineTotal } from '../utils.js';
import whiskey from '../Products/whiskey.js';
import cart from '../Cart-Files/cart.js';


const test = QUnit.test;


// test('renders whiskey', (expect) => {
//     // arrange
//     const jameson = {
//         id: 'jameson',
//         name: 'Jameson Whiskey',
//         image: '../../assets/Jameson.jpg',
//         description: 'Smooth with hints of vanilla',
//         category: 'Irish',
//         price: 18.00,
//         cost: 12.00
//     };
//     const expected = '<li class="Irish" title="Smooth with hints of vanilla"><h3>Jameson Whiskey</h3><img src="./assets/../../assets/Jameson.jpg" alt="Jameson Whiskey image"><p class="price">$18.00<button value="undefined">Add</button></p></li>';
    
//     // act
//     const dom = renderWhiskey(jameson);
//     const actual = dom.outerHTML;
    
//     // assert
//     expect.equal(actual, expected);
// });


test('CalcOrderTotal', (assert) => {
    const expected = 55700.00;
    const orderTotal = calcOrderTotal(cart, whiskey);
    assert.equal(orderTotal, expected);
});

test('Calc line total', (assert) => {
    const quantity = 5;
    const price = 18;
    const expected = 90.00;
    const total = calcLineTotal(quantity, price);
    assert.equal(total, expected);
});