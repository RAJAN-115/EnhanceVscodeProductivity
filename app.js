const user = { name: 'John Doe' };

function calculateSum(a, b) {
  return a + b;
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(this.name, this.price);
  }
}
