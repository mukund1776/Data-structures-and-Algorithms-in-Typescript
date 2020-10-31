// Write a program to recursive program to calculate factorial.

function factorial(n: number) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}

console.log('Printing factorial examples.');
console.log('0 - ', factorial(0));
console.log('1 - ', factorial(1));
console.log('2 - ', factorial(2));
console.log('10 - ', factorial(10));
console.log('15 - ', factorial(15));
