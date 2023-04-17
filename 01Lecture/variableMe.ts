// string
let greetings: string = "Hello,  cool";
greetings.toLowerCase();
console.log(greetings);

// number
let userId = 19131043.0002;
userId.toFixed();
console.log(userId);

// boolean
let isLoggedin: boolean = false;
console.log(isLoggedin.valueOf());

// any
let hero: string;
function getHero() {
  return "Cool";
}
hero = getHero(); // if we do not assign hero as string it becomes any type
console.log(hero);

export {};
