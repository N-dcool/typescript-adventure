"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// it produce many lines of js code
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 9] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 10] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 11] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 12] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE; // ==> 0
var mySeat1 = 9 /* SeatChoice1.AISLE */;
