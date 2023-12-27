//Dates

// let myDate = new Date()
// console.log(myDate);  //2023-12-27T04:46:56.354Z
// console.log(myDate.toString());   //Wed Dec 27 2023 10:16:56 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());  //2023-12-27T04:46:56.354Z
// console.log(myDate.toLocaleString());  //27/12/2023, 10:17:47 am
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toLocaleString());  //  23/1/2023, 12:00:00 am

// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString());  //23/1/2023, 5:03:00 am

// let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate3.toLocaleString());  //14/1/2023, 5:30:00 am

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
