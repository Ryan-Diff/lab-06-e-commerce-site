// import functions and grab DOM elements
import { renderWhiskey } from './render-whisky.js';
import whiskeyList from './Products/whiskey.js';
// initialize state
const whiskeyDiv = document.getElementById('whiskey');
// set event listeners to update state and DOM
for (let i = 0; i < whiskeyList.length; i++) {
    const booze = whiskeyList[i];
    const el = renderWhiskey(booze);
    whiskeyDiv.appendChild(el);
}