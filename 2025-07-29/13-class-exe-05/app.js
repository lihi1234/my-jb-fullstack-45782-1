"use strict";

( async () => {

    const getData= url => fetch(url).then(response=> response.json())
  
    const fetchUsers= async ()=>{
        const {users}=await getData('https://dummyjson.com/users')
        return users
    }
    
    
  const generateUserHTML=(users)=>{
     const usersList= users
     .map(user=> ` <tr>
            <td><img src=${user.image}></td>
            <td>${user.firstName} ${user.lastName}</td>
        </tr>`)
     .join("");
     return usersList;
  }

    
   const renderUsersHTML= html=>{
    document.getElementById("users-table").innerHTML= html;
   }

    //main

    const users= await fetchUsers()
    const html= generateUserHTML(users)
    renderUsersHTML(html)

})()
//
