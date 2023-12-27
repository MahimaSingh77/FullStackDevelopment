// const tinderUser1 = new Object()   //Its a singleton object
// console.log(tinderUser);  //{}

const tinderUser = {}         //It is a non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);   //{}

const regularUser = {
    email:"some@gmail.com",
    fullname:{

        userfullname:{
            firstname:"Mahima",
            lastname:"singh"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);  //Mahima

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);  /*{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }*/

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//mdn


const obj3 = {...obj1, ...obj2}  //spread
// console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id:1,
        email:"mahima@gmail.com"
    },
    {
        id:2,
        email:"mahima2@gmail.com"
    },
    {
        id:3,
        email:"mahima3@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); /*[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn',
// false ] ]*/
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true



//Destructuring of Objects

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//  console.log(course.courseInstructor);  //hitesh
const {courseInstructor: instructor} =course

// console.log(courseInstructor);  //hitesh
console.log(instructor);

/*json*/
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {}
]

//json formatter


