"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 100;
score = "0";
score = 43;
var naresh = { name: "Naresh", isActive: true };
naresh = { username: "naresh", isActive: true };
function getDBId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    console.log("DB = ".concat(id));
}
getDBId(1);
getDBId("2");
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, "3"];
var allottedSeat;
allottedSeat = "aisle";
