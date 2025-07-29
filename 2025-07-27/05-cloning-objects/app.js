"use strict";

(() => {
    const someFunc=(objA, arrayB)=>{
        objA.value++;

        const clone= Object.assign({},objA)
        const anotherClone= {...objA}
        console.log(anotherClone)

        const someArrayClone= [...arrayB]
    }
    someFunc({name:'Lihi', age: 23}, [1,2,3])
})()
