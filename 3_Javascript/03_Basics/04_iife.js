// Immediately Invoked Function Expressions (IIFE)
//to remove the polution of global scope, sometime we want to immediately run a function
(function chai() {
  console.log(`DB connected`);
})(); //here we need the semicolon to stop this function which is inveked due to iife
// otherwise next iife will not be run and give error

(() => {
  console.log(`DB connected two `);
})();

((name) => {
  console.log(`DB connected two ${name}`);
})("mahima");

