/*
    const superHeros = [];
    superHeros.push("spiderman");
    //=> this will give error: 
        Argument of type 'string' is not assignable to parameter of type 'never'.
*/
const superHeros: string[] = []; // or const superHeros: Array<string> = [];
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};
const allUsers: User[] = [];
const MLmodels: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

superHeros.push("spiderman");
heroPower.push(2);
allUsers.push({ name: "Naresh", isActive: true });

export {};
