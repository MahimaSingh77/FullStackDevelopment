//singleton
// Object.create

// objects literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Mahima",
  "full name": "Mahima Singh",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "abc@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// //Accessing the value of object
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.full name);   //it will give error therefore,
// we will use square bracket instead of this method

// console.log(JsUser["full name"]);
// // console.log(JsUser.mySym);         //mykey1
// console.log(JsUser[mySym]);  //mykey1

JsUser.email = "xyz@qab.com";
// Object.freeze(JsUser)
JsUser.email = "mahima@SINGH.COM";
// console.log(JsUser["email"]);  //xyz@qab.com

// console.log(JsUser);
/*{
  name: 'Mahima',
  'full name': 'Mahima Singh',
  age: 18,
  location: 'Jaipur',
  email: 'xyz@qab.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}*/

JsUser.greeting = function () {
  console.log("Hello JS user");
};
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello JS user

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greetingTwo()); //Hello JS user, Mahima
