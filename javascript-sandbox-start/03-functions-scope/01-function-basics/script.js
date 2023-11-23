// Define a function
function sayHello() {
  console.log('Hello World');
}

// Invoke, execute or call a function
sayHello();

//
function add(num1, num2) {
  console.log(num1 + num2);
  
}

// Invoke function with arguments
add(5, 10);

// Functions can return values
function subtract(num1, num2) {
  return num1 - num2;

  console.log('After the return');
}

// Assign the returned value to a variable
const result = subtract(10, 2);

console.log(result, subtract(20, 5));
