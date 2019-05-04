class ShoppingCart {
  constructor() {
    this.items = [];
  }
  // Add Items ("string", number, number)
  addItem(name, quantity, pricePerUnit) {
    const cart = this.items.push({
      name: name,
      quantity: quantity,
      pricePerUnit: pricePerUnit
    });
    return cart;
  }
  //Return Added Items
  getItems() {
    return this.items;
  }
  // Clears Shopping Cart Items
  clear() {
    return (this.items = []);
  }
  // Calculate Total Value of Items Using Array Reducer
  total() {
    return this.items.reduce((acc, curr) => {
      return acc + curr.quantity * curr.pricePerUnit;
    }, 0);
  }
}

module.exports = ShoppingCart;
