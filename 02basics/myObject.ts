/*
    const User = {
    name: "Naresh",
    email: "naresh@gmail.com",
    isActive: true,
    };

    function createuser({ name: string, isPaid: boolean }) {}

    // createuser({name: "Naresh", isPaid: true, email: "naresh@gmail.com"}); // this gives error
    let user = { name: "Naresh", isPaid: true, email: "naresh@gmail.com" };
    createuser(user); // this works

    function createCourse(): { name: string; price: number } {
    // return {} // this gives error
    return { name: "Angular", price: 1000 };
    }
*/

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // optional parameter ✔️
};

let myUser: User = {
  _id: "1245",
  name: "naresh",
  email: "naresh@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "cool@gmail.com";
// myUser._id = "asa"  // gives error since its only readonly :)

export {};
