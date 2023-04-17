"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //return num + "2"; // error
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    // ...
}
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
/*
    function getValue(myVal: number):string {
    if (myVal > 10) {
        return true;
    } else {
        return "200 OK";
    }
    }
*/
var getHello = function (name) {
    // if i dont return any thing its gives error
    return "";
};
var heros = ["ironman", "spiiderman", "thor"];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(6);
getUpper("naresh");
signUpUser("naresh", "naresh@gmail.com", "12345678", true);
loginUser("naresh", "naresh@gmail.com");
