// IMPORT MODULES under test here:
// import example from '../example.js';
//import {add, subtract, multiply, divide} from './app.js'
//import { add } from './utils.js';
const test = QUnit.test;

test('it should return 10 when passed 4 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const addValue1 = 4;
    const addValue2 = 6;
    const expected = 10;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(addValue1, addValue2)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
