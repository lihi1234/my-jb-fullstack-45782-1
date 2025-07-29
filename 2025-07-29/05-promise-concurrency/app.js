"use strict";
(()=>{

    const numbers= [3,8,16, 5, 67, 88, 99];
    const getDoubleNum= num=>
        new Promise((resole, reject)=>{
            setTimeout(()=>{
                resole(num**2)
            }, 1000)

            if(num%7===0) reject('boom')
            
        })

    Promise.all(
    numbers.map(getDoubleNum)
    ).then(console.log)

})()