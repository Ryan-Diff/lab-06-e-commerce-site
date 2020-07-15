import { renderWhiskey } from '../render-whiskey.js';

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
    const expected = '<li class="Irish" title="Smooth with hints of vanilla"><h3>Jameson</h3><img src="../assets/Jameson.jpg"><p class="price">$18.00<button value="apple">Add</button></p></li>';
    
    // act
    const dom = renderWhiskey(jameson);
    const actual = dom.outerHTML;
    
    // assert
    expect.equal(actual, expected);
});