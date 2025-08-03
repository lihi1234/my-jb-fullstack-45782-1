"use strict";

(async () => {

    const getPhotos = async () => {
        const users = await fetchUsers()
        //const newPhotos=photos.recipes.slice(0, 100);;
        
        const html = generateUsersHTML(users.users)
        renderUsersHTML(html)
    }

    const getData = url => fetch(url).then(response => response.json())

    const fetchUsers = async () => {
        const users = await getData(`https://dummyjson.com/users`)
        return users
    }


    const generateUsersHTML = users => 
        users.map(({firstName, lastName,email, image }) =>`<tr> 
             <td>${firstName}</td>
             <td>${lastName}</td>
             <td>${email}</td>
             <td><img src="${image} "style="width: 100px;" "></td>
            </tr>`)
    .join("");

    

    const renderUsersHTML = html => {
        document.getElementById("users-table").innerHTML = html;
    }

    getPhotos();
    
})()
//
