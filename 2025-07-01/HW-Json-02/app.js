let myCat={
    name: 'mizi',
    age: 5,
    color: 'gray',
    isSterile: true,
    
}

myCat=JSON.stringify(myCat);

alert(myCat);
const yourCat= JSON.parse(myCat);
//console.log(yourCat);
 for (const prop in yourCat) {
    document.writeln(`${prop} : ${yourCat[prop]} <br>`)
    
 }