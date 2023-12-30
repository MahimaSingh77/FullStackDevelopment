const myObject = {
    js:'javascript',
    cpp : 'C++',
    rb:"ruby"
}

for (const key in myObject) {

    // console.log(key); 
                         /**js
                           cpp
                           rb */

    // console.log(myObject[key]);  /**javascript C++ ruby */

    // console.log(`${key} shortcut is for ${myObject[key]}`);
     /**js shortcut is for javascript
    cpp shortcut is for C++
    rb shortcut is for ruby */

   
}







