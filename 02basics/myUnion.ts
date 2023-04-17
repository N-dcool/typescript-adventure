let score: number | string = 100;
score = "0";
score = 43;

type User = {
  name: string;
  isActive: boolean;
};

type Admin = {
  username: string;
  isActive: boolean;
};

let naresh: User | Admin = { name: "Naresh", isActive: true };
naresh = { username: "naresh", isActive: true };

function getDBId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  }
  console.log(`DB = ${id}`);
}

getDBId(1);
getDBId("2");

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string)[] = [1, 2, "3"];

let allottedSeat: "aisle" | "window" | "middle";

allottedSeat = "aisle";
// allottedSeat = "crew";  // gives error

export {};
