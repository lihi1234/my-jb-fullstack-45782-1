const showUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(position=>{console.log(position)}, eror=>{console.log(eror)});
    console.log(location);
}

showUserLocation();

