import renderWhisky from '../products/render-whisky.js';

const test = QUnit.test;

QUnit.module('Render Whisky');

test('renders whisky', assert => {
    // arrange
    const Jameson = {
        id: 'whisky',
        name: 'Jameson',
        image: 'apple.png',
        description: 'Smooth with hints of vanilla',
        category: 'Irish',
        price: 18.00,
        cost: 12.00
    };
    const expected = '<li class="Irish" title="Smooth with hints of vanilla"><h3>Jameson</h3><img src="../assets/apple.png" alt="Red Apple image"><p class="price">$18.00<button value="apple">Add</button></p></li>';
    
    // act
    const dom = renderWhisky(whisky);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});