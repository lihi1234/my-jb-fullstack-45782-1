"use strict";
(()=>{
    const getDoubleNum= num=>
        new Promise((resole, reject)=>{
            setTimeout(()=>{
                resole(num**2)
            }, 1000)

            if(num%7===0) reject('boom');
            
        })

    getDoubleNum(7).then(alert).catch(alert)
})()