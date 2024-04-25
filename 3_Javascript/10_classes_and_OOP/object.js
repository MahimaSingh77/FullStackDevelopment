function multiplyBy5(num) {
  this.num = num;
  return num * 2;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment =
  function () {
    this.score++;
  };

createUser.prototype.printMe = function(){
  console.log(`Score is ${this.score}`);
}
const chai = new createUser("chai", 25)
const tea = createUser("tea",250)

chai.printMe()