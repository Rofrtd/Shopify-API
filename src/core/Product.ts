export class Product {
  constructor(name: String, id: String) {
    this.name = name;
    this.id = id;
  }
  name: String;
  id: String;
  category: String;
  description: String;
  brand: String;
  variations: [{
    color: String;
    size: String;
    price: Number;
    stock: Number;
    discount: Number;
    images: Array<String>;
    type: String;
  }]
  created_on: Date;
}
