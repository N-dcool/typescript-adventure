"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val + "";
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({});
function getSearchProduct(products) {
    // some database operations
    const myIndex = 3;
    return products[myIndex];
}
// <T> similliar to <T,> : its used mostly in react to indicate its not component its generic type (><)
const getMoreSearchProduct = (products) => {
    // some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
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
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
