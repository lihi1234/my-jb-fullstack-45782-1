"use strict";
(()=>{
    
 

    const getData = url => fetch(url).then(response => response.json())

     const fetchUsers = async () => {
        const users = await getData(`https://jsonplaceholder.typicode.com/users`)
        return users
    }


   const generateUsersHTML= users=> 
    users.map(({name, username, email, phone, address:{city, street} })=>{
         `   <tr><td> ${name}</td>
        <td> ${username}</td>
        <td> ${email}</td>
        <td> ${phone}</td>
        <td> ${city}</td>
        <td>${street}</td></tr>
        `
    }). join("");
   

    const renderUsersHTML=html=>{
        document.getElementById("users-table").innerHTML= html;
    }

     const getUsers = async () => {
        const users = await fetchUsers()
        const html = generateUsersHTML(users)
        renderUsersHTML(html)
    }

    getUsers();
    


})()