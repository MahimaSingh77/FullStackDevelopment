const user = {
    username:"hitesh",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  //'this' refers to the current context
        // console.log(this);
    }
}

// user.welcomeMessage()   //hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage()   //sam , welcome to website

// console.log(this);

// function chai(){
//     let username = "mahima"
//     console.log(this.username);         //undefined
// }
// chai()


// const chai = function(){
//     let username = "mahima"
//         console.log(this.username);         //undefined
//     }
//     chai()


// const chai = () => {
//     let username = "mahima"
//         console.log(this.undefined);         //undefined
//     }

// chai()



//Basic Arrow Function
// const addTwo = (num1, num2) => {

//     return num1+num2

// }
// console.log(addTwo(3,4));



//Implicit return (One line statement , use of paranthesis and return keyword is not needed)

// const add = (num1, num2) => (num1+num2)

// console.log(add(3,4));


//Explicit return (use of paranthesis and return keyword is needed)






const addTwo = (num1, num2) => ({username:"mahima"})
console.log(addTwo(8+5));




// const myArray = [2,3,4,23,34]
// myArray.forEach()
