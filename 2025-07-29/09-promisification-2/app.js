"use strict";

(async () => {
    const getUserLocation = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)

    })

    const sleep= time=>new Promise((resolve, reject)=>{
        setTimeout(resolve, time);
    })

        
    
    try {
       
        let geo = await getUserLocation();
        console.log(geo);
        
        await sleep(5*1000)

       geo= await getUserLocation()
       console.log(geo)
    }
    catch (err) {
       
        console.log(err)
    }

})()
//
