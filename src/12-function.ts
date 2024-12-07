const suma = (a: number, b: number, c?: number): number => a + b + (c ? c : 0);

console.log(suma(1, 2)); // 3
console.log(suma(1, 2, 3)); // Error: Expected 2 arguments, but got 3.
console.log(suma(1)); // Error: Expected 2 arguments, but got 1.
console.log(suma()); // Error: Expected 2 arguments, but got 0.
console.log(suma(2, 2)); // 4