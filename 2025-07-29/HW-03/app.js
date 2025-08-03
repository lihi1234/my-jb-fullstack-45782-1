"use strict";

(async () => {

    const getChosenUser = async () => {
        const id = document.getElementById("the-id").value
        const user = await fetchUsers(id)
        console.log(user)
        const html = generateUserHTML(user)

        renderUsersHTML(html)
    }

    const getData = url => fetch(url).then(response => response.json())

    const fetchUsers = async (id) => {
        const user = await getData(`https://jsonplaceholder.typicode.com/users/${id}`)
        return user
    }


    const generateUserHTML = (user) => {
        return `
            <h3> name: ${user.name}</h3>
        <h3>user name: ${user.username}</h3>
        <h3>email: ${user.email}</h3>
        <h3>phone number: ${user.phone}</h3>
        <h3>city: ${user.address.city}</h3>
        <h3>street: ${user.address.street}</h3>
        <h3>zip code: ${user.address.zipcode}</h3>
        <h3>company name: ${user.company.name}</h3>`
    }


    const renderUsersHTML = (html, id) => {
        document.getElementById("user-div").innerHTML = html;
    }

    //main

    
    document.getElementById("submit-btn").addEventListener("click", getChosenUser)

})()
//
