// Console.Log number
console.log(100);

// Console.Log string
console.log('Hello World');

// Console.Log multiple values
console.log(20, 'Hello', true);

// Console.Log a variable
const x = 100;
console.log(x);

// Console.Log error & warning
console.error('Alert');
console.warn('Warning');

// Console.Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// To Group Console.Log commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to Console.Log
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
