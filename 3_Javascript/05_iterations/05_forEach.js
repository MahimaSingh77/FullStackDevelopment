const coding = ["js", "ruby", "java"];

coding.forEach(function (val) {
  console.log(val);
});
/**js
ruby
java */

// coding.forEach((val)=> {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "java",
  },
  {
    languageName: "a",
    languageFileName: "v",
  },
  {
    languageName: "e",
    languageFileName: "f",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
