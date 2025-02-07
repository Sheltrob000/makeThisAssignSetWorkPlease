const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);
const increment = x => x + 1;
const doubleValue = x => x * 2;
const squareValue = x => x * x;

const processNumber = pipe(increment, doubleValue, squareValue);
console.log(processNumber(3)); // Output: 8