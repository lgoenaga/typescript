const calcTtotal = (price: number[]) => {
  return price.reduce((acc, item) => acc + item, 0);
}
const total = calcTtotal([1, 2, 3, 4, 5]); // 15
console.log(total);
console.log(calcTtotal([10])); // 10
console.log(calcTtotal([1, 2, 3, 4, 5, 6, 7, 8])); // 36
console.log(calcTtotal([])); // 0

const calcTtotal2 = (price: number[]): void => {
  const total = price.reduce((acc, item) => acc + item, 0);
  console.log(total);
}
calcTtotal2([1, 2, 3, 4, 5]); // 15

