(async () => {
  const myCart: { id: number; title: string; price: number }[] = [];
  const products: { id: number; title: string; price: number }[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch("http://api.escuelajs.co/api/v1/products", {
      method: "GET",
    });
    const data = await rta.json();
    products.push(...data);
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }

  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: "Luis",
    lastName: "Goenaga",
  };
  const rta = `${person} - ${limit}`
  console.log(rta);
});
