class Product {
  constructor(name, price, salesRatio) {
    this.name = name;
    this.price = price;
    this.salesRatio = salesRatio;
  }

  getName() {
    return `${this.name}`;
  }
  setName(newName) {
    this.name = newName;
  }
  getPrice() {
    return `${this.price}`;
  }
  setPrice(newPrice) {
    this.price = newPrice;
  }
  getsalesRatio() {
    return `${this.salesRatio}`;
  }
  setSalesRatio(ratio){
     this.salesRatio = ratio
  }
  getSalesPrice(){
      return this.price * (1-ratio)
  }
}
const name = new Product("fotbool", 20 , 20/100);
console.log(name)








