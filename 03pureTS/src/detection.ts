// type narrowing :(Discusion)

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please prvide Id");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// in operator example:

interface User {
  username: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function checkAdmin(account: User | Admin): boolean {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

// instanceof example :

const x = new Date();
// const x = new String("Hello, World");

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// learning type predicates : means using condition as type for output of method :)

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // if we dont use :pet is Fish as return type is isFish =>
    //                     it is not sure that is pet is fish or bird :(
    console.log("get Fish food");
  } else {
    pet;
    console.log("get Bird Food");
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    console.log("its circle");
  } else if (shape.kind === "square") {
    console.log("its square");
  } else {
    console.log("its rectangle");
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
