function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("M");
  console.log("A");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
// addTwoNumbers(5,3)

const result = addTwoNumbers(2, 2);
// console.log("Result :" , result);

function loginUserMessage(username = "sam") {
  // if(username === undefined){
  //     console.log(("Please enter a username"));
  //     return;
  // }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));   //hitesh just logged in
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  //rest operator
  return num1;
}

// console.log(calculateCartPrice(200,400,500,700));     //[ 200, 400, 500, 700 ]

function calculateCartPrice2(val1, val2, ...num1) {
  //rest operator
  return num1;
}

// console.log(calculateCartPrice2(200,400,500,700));     //[ 500, 700 ]

const user = {
  username: "mahima",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} amd price is ${anyobject.price}`
  );
}

// handleObject(user);

//passing direct object
// handleObject({
//   username: "sam",
//   price: 399,
// });



//passing arrays
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));   //400
// console.log(returnSecondValue([200,540,5558]));  //540

