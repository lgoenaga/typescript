( () => {
  let products = ['Apple', 'Banana', 'Orange'];
  console.log('Products:', products);
  let prices = [1.25, 0.75, 0.50];
  console.log('Prices:', prices);
  products.push('Pineapple');
  console.log('Products after adding Pineapple:', products);
  prices.push(1.00);
  console.log('Prices after adding 1.00:', prices);

  let produc_prices: [string, number, boolean][] = [];
  produc_prices.push(['Apple', 1.25, true]);
  produc_prices.push(['Banana', 0.75, true]);
  produc_prices.push(['Orange', 0.50, false]);
  console.log('Products and Prices:', produc_prices);

  let product_prices: (string | number |boolean)[] = [];
  product_prices.push('Apple');
  product_prices.push(1.25);
  product_prices.push(true);
  product_prices.push('Banana');
  product_prices.push(0.75);
  product_prices.push(true);
  product_prices.push('Orange');
  product_prices.push(0.50);
  product_prices.push(false);
  console.log('Products and Prices:', product_prices);
}
)();