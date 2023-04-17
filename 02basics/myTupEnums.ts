let user: [string, number, boolean];

user = ["Naresh", 100, true];
/*
    user = ["Naresh", true, 100]; // this gives error
    user = ["Naresh", 100, true, "cool"]; // this gives error
*/
let rgb: [number, number, number];
rgb = [2, 209, 124];

let TUser: [number, string];

TUser = [1, "narsh@gmail.com"];

TUser[1] = "cool@gmail.com";

// Typescript bug: (><)
TUser.push(123);

export {};
