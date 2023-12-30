// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
// for (const iterator of object) {


// }
// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "Helo world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }



//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


// console.log(map);


//for of loop on map
for (const [key, value] of map) {

    console.log(key, ":-" , value);
    
}



