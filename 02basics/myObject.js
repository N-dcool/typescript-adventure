"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1245",
    name: "naresh",
    email: "naresh@gmail.com",
    isActive: false,
};
myUser.email = "cool@gmail.com";
