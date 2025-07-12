function addFruit(){
    const fruitName= document.getElementById("fruit").value
    const li= `<li> ${fruitName} </li>`;
    document.getElementById('list').innerHTML+= li;

    
}



