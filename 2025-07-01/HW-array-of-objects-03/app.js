const geolocations=[];

for (i=0; i<3; i++){
    const geolocation={
        latitude: +prompt(`enter your latitude`),
        longitude: +prompt(`enter your longitude`)
    }
    geolocations.push(geolocation);
}

console.log(geolocations);

for(item of geolocations){
    for(prop in item){
        document.write(`${prop} : ${item[prop]} <br>`);
    }
    document.write(`<br>`)
}