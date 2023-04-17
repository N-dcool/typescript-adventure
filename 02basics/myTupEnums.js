"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = ["Naresh", 100, true];
/*
    user = ["Naresh", true, 100]; // this gives error
    user = ["Naresh", 100, true, "cool"]; // this gives error
*/
var rgb;
rgb = [2, 209, 124];
var TUser;
TUser = [1, "narsh@gmail.com"];
TUser[1] = "cool@gmail.com";
// Typescript bug: (><)
TUser.push(123);
