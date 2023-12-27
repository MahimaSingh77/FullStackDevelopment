// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3));  //23.9  
 /*Returns a string containing a 
number represented either in exponential or fixed-point notation with a 
specified number of digits.*/


// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //10,00,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000


// ++++++++++++++++++++ Maths +++++++++++++++++++++
// console.log(Math);     //Object [Math] {}
// console.log(Math.abs(-4));  //4   (It returns absolute value)
// console.log(Math.round(4.39)); //4 (round off)
// console.log(Math.ceil(4.2));  //5  it will round off taking upper value only
// console.log(Math.floor(4.9)); //4  it will round off taking lower value only

// console.log(Math.min(4, 3, 6, 7, 9));  //3
// console.log(Math.max(4, 3, 6, 7, 9));   //9

console.log(Math.random())    //(It gives a number from 0 to 1 - Mostly decimal)
console.log(Math.floor(Math.random()*10) + 1)





const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)

