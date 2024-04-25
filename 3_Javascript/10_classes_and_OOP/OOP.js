const user = {
  username: 'mahima',
  loginCount: 8,
  signIn: true,

  getUserDetails: function () {
    // console.log('Got user details from databse');
    console.log(`Username : ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this)




// const promiseOne = new Promise()
// const date = new Date()



function User(username, loginCount, isLoggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isLoggedIn=isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this        (it is returned by default(implicitly ))


}



const userOne = new User("mahima", 12, true)
const userTwo = new User("hitesh",13,false)
// console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);

