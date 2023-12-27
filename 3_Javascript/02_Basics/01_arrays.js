// array

const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["shaktiman" , "nagraj"]
// console.log(myArr[0]);
// console.log(myHeros[0]);

// const myArr2 = new Array(1,2,32,25)
// console.log(myArr2[2]);

//Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9) // [ 9, 0, 1, 2,3, 4, 5 ] (Adds 9 at the beginning)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);  //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(3));   //3

// const newArr = myArr.join()

// console.log(myArr);  //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArr);  //object
// console.log(newArr);   //0,1,2,3,4,5
// console.log(typeof newArr);  //string

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr); //elements are cutout from the original array
