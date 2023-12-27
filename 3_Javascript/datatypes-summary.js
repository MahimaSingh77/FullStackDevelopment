// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol(kisi bhi value ko unique banane ke liye use hota), BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); //false

const bigNumber = 3456543575555526265262625959n; //BigInt

//Reference Type (Non-Primitve)

// Array, Objects, Functions,

const heros = ["shaktiman", "nagraj", "doga"];

//objects
let myObj = {
  name: "hitesh",
  age: 22,
};

// const myfunction = function () {
//   console.log("Hello World");
// };

// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) - (Here, u will get a copy of the variable you declared)
// , Heap(Non-Primitive) (And here u will get the reference of the variable)

// let myYoutubename = "abcd"
// let anothername  = myYoutubename
// anothername = "xyz";
// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
