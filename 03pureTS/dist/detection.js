"use strict";
// type narrowing :(Discusion)
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please prvide Id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function checkAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
// instanceof example :
const x = new Date();
// const x = new String("Hello, World");
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // if we dont use :pet is Fish as return type is isFish =>
        //                     it is not sure that is pet is fish or bird :(
        console.log("get Fish food");
    }
    else {
        pet;
        console.log("get Bird Food");
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        console.log("its circle");
    }
    else if (shape.kind === "square") {
        console.log("its square");
    }
    else {
        console.log("its rectangle");
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
