"use strict";

(async () => {

    const getUsers = async () => {
        const user = await fetchUsers()
        const html = generateUsersHTML(user)
        renderUsersHTML(html)
    }

    const getData = url => fetch(url).then(response => response.json())

    const fetchUsers = async () => {
        const users = await getData(`https://jsonplaceholder.typicode.com/users`)
        return users
    }


    const generateUsersHTML = (users) => {
        return users.map(user=>`<option value="${user.id}">${user.name}</option>`).join("");

    }

    const renderUsersHTML = (html) => {
        document.getElementById("users-select").innerHTML += html;
    }

    const fetchUser= async id=>{
         const user = await getData(`https://jsonplaceholder.typicode.com/users/${id}`)
        return user
    }
    const generateUserHTML= user=> `   <h3> name: ${user.name}</h3>
        <h3>user name: ${user.username}</h3>
        <h3>email: ${user.email}</h3>
        <h3>phone number: ${user.phone}</h3>
        <h3>city: ${user.address.city}</h3>
        <h3>street: ${user.address.street}</h3>
        <h3>zip code: ${user.address.zipcode}</h3>
        <h3>company name: ${user.company.name}</h3>`
        const  renderUserToHTML= html=>(document.getElementById("user-data").innerHTML= html)
    //main
    const getChosenUser= async (event)=>{
        console.log(document.getElementById("users-select").value)
        const user = await fetchUser(document.getElementById("users-select").value);
        //alert(`Shello ${event}`)
        const html= generateUserHTML(user)
        renderUserToHTML(html);
    }
    getUsers();
    //getChosenUser();
    document.getElementById("users-select").addEventListener(("change"), getChosenUser);
    //document.getElementById("submit-btn").addEventListener("click", getChosenUser)

})()
//
