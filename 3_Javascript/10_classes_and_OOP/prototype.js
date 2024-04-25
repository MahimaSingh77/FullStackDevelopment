// let myname = "mahima "
// let mychannel = "chai "

// // console.log(myname.length);
// console.log(myname.truelength);

let myHeros = ['thor', 'spiderman'];

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.mahima = function () {
  console.log(`mahi is present in all objects`);
};

Array.prototype.heyMahima = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.mahima()
// myHeros.mahima()
// myHeros.heyMahima()
// // heroPower.heyMahima()

// inheritence

const User = {
  name: 'chai',
  email: 'chai@google.com',
};
const Teacher = {
  makeVide: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssigment: 'JS assignment',
  fullTIme: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
let anotherUsername = 'ChaiAurCode  ';
String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
'mahima'.trueLength();
'iceTea'.trueLength();
