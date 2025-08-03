"use strict";

( async () => {

    const getData= url => fetch(url).then(response=> response.json())
  
    const fetchUsers= async ()=>{
        const users=await getData('https://jsonplaceholder.typicode.com/users')
        return users
    }
    
    
  const generateUserHTML=(users)=>{
     const usersList= users
     .map(user=> ` <tr>
            <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.address.street}</td>
        <td>${user.address.sipcode}</td>
        <td>${user.company.name}</td>
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
