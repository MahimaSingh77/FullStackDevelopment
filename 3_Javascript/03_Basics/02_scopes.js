

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);          
// console.log(b); 
// console.log(c);


function one(){
    const username = "mahima"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);   //error


    two()
}


// one()

if(true){
    const username  = "mahi"
    if(username === "mahi"){
        const website = "youtube"
        // console.log(username + website);  //mahiyoutube
    }

    // console.log(website);  //error
   
}

// console.log(username);  //error






function addone(num){
    return num+1
}

addone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)
