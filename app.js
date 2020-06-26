import {addition, subtract, multiply, divide} from './utils.js';

// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const addValue1 = addInput1.value;
    const addValue2 = addInput2.value;

    // add the two values together
    const sumAdd = Number(addValue1) + Number(addValue2);

    // update the textContent of the span
    boogerSpan.textContent = sumAdd;
});

const subInput1 = document.getElementById('subtract-input-1');
const subInput2 = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subSpan = document.getElementById('subtract-result');

subButton.addEventListener('click', () => {
    const subValue1 = subInput1.value;
  
    const subValue2 = subInput2.value;
    
    const sumSub = Number(subValue1) - Number(subValue2);
    subSpan.textContent = sumSub;
});

const multInput1 = document.getElementById('multiply-input-1');
const multInput2 = document.getElementById('multiply-input-2');
const multButton = document.getElementById('multiply-button');
const multSpan = document.getElementById('multiply-result');

multButton.addEventListener('click', () => {
    const multValue1 = multInput1.value;
    const multValue2 = multInput2.value;
    const sumMult = Number(multValue1) * Number(multValue2);
    multSpan.textContent = sumMult;
})

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideSpan = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
    const divideValue1 = divideInput1.value;
    const divideValue2 = divideInput2.value;
    const sumDivide = Number(divideValue1) / Number(divideValue2);
    divideSpan.textContent = sumDivide;
})