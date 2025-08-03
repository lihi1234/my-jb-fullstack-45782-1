"use strict";

( async () => {

    const getData= url => fetch(url).then(response=> response.json())
  
    const {users}= await getData('https://dummyjson.com/users')
    
    // console.log(typeof data)

    //console.log(data)
    
    const usersList= users.map(user=> `<li>${user.firstName} ${user.lastName}</li>`);

    document.getElementById("users-ul").innerHTML= usersList.join("");

})()
//
