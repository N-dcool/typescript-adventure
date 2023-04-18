const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val + "";
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  price: number;
}

// identityFour<Bottle>({});

function getSearchProduct<T>(products: T[]): T {
  // some database operations
  const myIndex = 3;
  return products[myIndex];
}

// <T> similliar to <T,> : its used mostly in react to indicate its not component its generic type (><)
const getMoreSearchProduct = <T>(products: T[]): T => {
  // some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  username: string;
  password: string;
  connection: string[];
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction("T Type Can Work HERE !", {
  username: "naresh",
  password: "",
  connection: ["rohit", "amit"],
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
