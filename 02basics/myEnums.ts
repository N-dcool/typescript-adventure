// it produce many lines of js code
enum SeatChoice {
  AISLE = 9,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const mySeat = SeatChoice.AISLE; // ==> 0

// produces few lines of js code
const enum SeatChoice1 {
  AISLE = 9,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const mySeat1 = SeatChoice1.AISLE;

export {};
