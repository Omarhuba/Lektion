class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const newUser = new User("omar", "mutellip");
console.log(newUser);

//  övning 1

class product {
  constructor(name, price, salesRatio, salesPrice) {
    this.name = name;
    this.price = price;
    this.salesRatio = salesRatio;
    this.salesPrice = salesPrice;
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }
  getPrice() {
    return this.price;
  }
  setPrice(newPrice) {
    this.price = newPrice;
  }
  getSalesRatio() {
    return this.salesPrice;
  }
  setSalesRatio(ratio) {
    this.salesRatio = ratio;
  }
  getSalesPrice() {
    return this.price * (1 - ratio);
  }
}

const newProduct = new product("football", "30$", 30 / 100,7);
console.log(newProduct);



//  övning 2

class Group{
    constructor(){
        this.users = []
    }
    addUser(){
        this.users.push()
    }
    getRandomUser(){
        const randomIndex = Math.floor(Math.random() * this.users.length)
        return this.users[randomIndex]
    }
}

const group = new Group()
group.addUser( new User('omar', 'mutellip'))
group.addUser( new User('alim ', 'yasin'))
const randomUser = group.getRandomUser()
console.log(group);