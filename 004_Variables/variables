// const

function myFunction() {
  const x = 10;

  console.log(x); // Logs "10" to the logging console.
  Logger.log(x); // Logs "10" to the logging console, with more detail.
}

function calculateCircleArea(radius) {
  const PI = 3.14159;

  return PI * radius * radius;
}

const circleArea = calculateCircleArea(5);

console.log(circleArea); // Logs "78.53982" to the logging console.

function greetUser() {
  const USER_NAME = "Bard";
  console.log(`Hello, ${USER_NAME}!`);
}

greetUser(); // Logs "Hello, Bard!" to the logging console.

function calculateShippingCost(weight) {
  const SHIPPING_RATE = 1.00;

  return weight * SHIPPING_RATE;
}

const shippingCost = calculateShippingCost(5);

console.log(shippingCost); // Logs "5.00" to the logging console.


// const
function constExample() {

  // const
  const x = 30;
  //console.log(x);
  //Logger.log(x);

  // const cannot be reassigned, but the value can change
  // TypeError: Assignment to constant variable.
  // cannot do this:
  // x = 50;
  // console.log(x);

  // const has block scope
  {
    console.log(x);
    const y = 1;
    console.log(y);
  }

  // ReferenceError: y is not defined
  // defined in a child block one level up, not available here
  console.log(y);

}

/**
 * --------------------------------------------------------------
 * let 
 */

function multiplyNumbers(x, y) {
  let product = x * y;

  return product;
}

const result = multiplyNumbers(5, 10);

console.log(result); // Logs "50" to the logging console.

// let example
function letExample() {

  let y = 100;
  console.log(y);

  // can be reassigned
  y = 200;
  console.log(y);

  // cannot redeclare it though
  // let y = 300;
  // console.log(y);

  // block scoped
  {
    let w = 99;
    console.log(w);
  }

  // variable w not available outside block
  //console.log(w);
}

/**
 * --------------------------------------------------------------
 *var 
 */


// var example
function varExample() {

  var x = 1;
  console.log(x);

  // can be reassigned
  x = 2;
  console.log(x);

  // var has function scope 
  {
    var newVariable = 1000;
  }

  console.log(newVariable);

}



/**
 * --------------------------------------------------------------
 * global variable 
 */

// Global Variables
const SHEET_NAME = 'dataset_2020';
// other things to note about variables
function otherNotes() {

  // Cannot access 'alpha' before initialization
  //console.log(alpha);
  //const alpha = 10;

  // bad practice to not declare
  //alpha = 10;
  //alpha = 20;
  //console.log(alpha);

  // access global variables
  console.log(SHEET_NAME);
}

//another example 

const MY_GLOBAL_VARIABLE = "Hello, world!";

function function1() {
  console.log(MY_GLOBAL_VARIABLE); // Logs "Hello, world!"
}

function function2() {
  console.log(MY_GLOBAL_VARIABLE); // Logs "Hello, world!"
}

function1();
function2();
