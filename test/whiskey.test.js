import { renderWhiskey } from '../render-whisky.js';
import renderLineItems from '../render-line-items.js';

const test = QUnit.test;


test('renders whiskey', (expect) => {
    // arrange
    const jameson = {
        id: 'jameson',
        name: 'Jameson Whiskey',
        image: 'apple.png',
        description: 'Smooth with hints of vanilla',
        category: 'Irish',
        price: 18.00,
        cost: 12.00
    };
    const expected = '<li class="Irish" title="Smooth with hints of vanilla"><h3>Jameson Whiskey</h3><img src="./assets/apple.png" alt="Jameson Whiskey image"><p class="price">$18.00<button value="undefined">Add</button></p></li>';
    
    // act
    const dom = renderWhiskey(jameson);
    const actual = dom.outerHTML;
    
    // assert
    expect.equal(actual, expected);
});
