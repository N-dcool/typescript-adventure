function addTwo(num: number): number {
  //return num + "2"; // error
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  // ...
}

function loginUser(name: string, email: string, isPaid: boolean = false) {}

/*
    function getValue(myVal: number):string {
    if (myVal > 10) {
        return true;
    } else {
        return "200 OK";
    }
    }
*/
const getHello = (name: string): string => {
  // if i dont return any thing its gives error
  return "";
};

const heros = ["ironman", "spiiderman", "thor"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

addTwo(6);
getUpper("naresh");
signUpUser("naresh", "naresh@gmail.com", "12345678", true);
loginUser("naresh", "naresh@gmail.com");

export {};
