const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// accountId=2       //not allowed

accountEmail="xyz@gmail.com"
accountPassword="212121"
accountCity="Bengaluru"
console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

let accountState;     //undefined
console.table([accountId, accountEmail, accountPassword, accountState ])