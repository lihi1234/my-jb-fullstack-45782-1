"use strict";

(async () => {

    const getPhotos = async () => {
        const photos = await fetchPhotos()
        const newPhotos=photos.recipes.slice(0, 100);;
        const html = generatePhotosHTML(newPhotos)
        renderPhotosHTML(html)
    }

    const getData = url => fetch(url).then(response => response.json())

    const fetchPhotos = async () => {
        const photos = await getData(`https://dummyjson.com/recipes`)
        return photos
    }


    const generatePhotosHTML = photos => 
        photos.map(({id, image,name, cuisine }) =>`<tr> 
             <td>${name}</td>
             <td>${id}</td>
             <td>${cuisine}</td>
             <td><img src="${image} "style="width: 100px;" "></td>
            </tr>`)
    .join("");

    

    const renderPhotosHTML = html => {
        document.getElementById("recipes-table").innerHTML = html;
    }

    getPhotos();
    
})()
//
