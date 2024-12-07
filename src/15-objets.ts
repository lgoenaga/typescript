( () => {
  type  Size = 'small' | 'medium' | 'large';

  type Product = {
    name: string;
    price: number;
    date: Date;
    size?: Size;
  };

  const products: Product[] = [];

  const addProduct = (product: Product) => {
    products.push(product);
    console.log(`Product ${product.name} added`);
  }

  addProduct({ name: 'Shirt', price: 15, date: new Date(1975, 8, 9) });
  addProduct({ name: 'Pants', price: 20, size: 'medium', date: new Date(1996, 11, 16) });
  addProduct({ name: 'Shoes', price: 30, size: 'large', date: new Date() });

  console.log(products); // [ { name: 'Shirt', price: 15, date: 1975-10-09T05:00:00.000Z }, { name: 'Pants', price: 20, size: 'medium', date: 1996-12-16T06:00:00.000Z }, { name: 'Shoes', price: 30, size: 'large', date: 2021-07-07T05:00:00.000Z } ] 

  products.forEach((product) => {
    const dateInColombia = product.date.toLocaleString('es-CO', {
      timeZone: 'America/Bogota',
    });
    console.log(
      `Product: ${product.name}, Price: ${product.price}, Date: ${dateInColombia}`
    );
  });
})();
