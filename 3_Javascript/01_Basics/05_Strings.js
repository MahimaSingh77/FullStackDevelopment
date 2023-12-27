const myName = "Mahima"
const repoCount = 50

// console.log(name + repoCount + "Value");
// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const name = new String("Mahi")

//String is not an array but an object having key-value pairs 
// like 
// 0: "M"   1:"a"  2:"h"  3:"i"

// console.log(name[0]);        //M
// console.log(name.__proto__);   //{}


// console.log(name.length);   //4
// console.log(name.toUpperCase());  //MAHI   
// console.log(name.charAt(2)); //h
// console.log(name.indexOf('i')); //3

// const newString = name.substring(0,2);
// console.log(newString);     //Ma


// const anotherString = name.slice(-6,2)
// console.log(anotherString);   


// const newStringOne = "          Mahima Singh "
// console.log(newStringOne);    //        Mahima Singh
// console.log(newStringOne.trim());   //Mahima Singh(Removes starting and end space only)




// const url = "https://abc.com/singh%mahima"

// console.log(url.replace('%' , '-'));
// console.log(url.includes('mahima'));     //true
// console.log(url.split('/'));           //[ 'https:', '', 'abc.com', 'singh%mahima' ]
