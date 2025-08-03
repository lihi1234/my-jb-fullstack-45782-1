"use strict";

(async () => {

    const getPhotos = async () => {
        const users = await fetchWether(document.getElementById("city-select").value)
        //const newPhotos=photos.recipes.slice(0, 100);;
       
        const html = generateUsersHTML(users)
        renderUsersHTML(html)
    }

    const getData = url => fetch(url).then(response => response.json())

    const fetchWether = async city => {
        const wether = await getData(`http://api.weatherapi.com/v1/current.json?key=6789afad7d384f37887212315250308&q=${city}`)
        return wether
    }


    const generateUsersHTML = ({location:{name}, current:{temp_c, condition:{icon}}}) => `
    <h3>city: ${name}</h3>
    <h3>temp: ${temp_c}</h3>
    <h3><img src="${icon}"></h3>
    `;

    

    const renderUsersHTML = html => {
        document.getElementById("wether-div").innerHTML = html;
    }

    document.getElementById("city-select").addEventListener(("change"), getPhotos )
    
})()
//
