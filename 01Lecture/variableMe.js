"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var greetings = "Hello,  cool";
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 19131043.0002;
userId.toFixed();
console.log(userId);
// boolean
var isLoggedin = false;
console.log(isLoggedin.valueOf());
// any
var hero;
function getHero() {
    return "Cool";
}
hero = getHero(); // if we do not assign hero as string it becomes any type
console.log(hero);
