"use strict";

(() => {
    const calc = (a, b) => { 
        a++;
        return a + b;
     }
    let a = 3;
    let b = 4;
    console.log(`result of ${a} + ${b} is ${calc(3, 4)}`)


    const calcObject=(a,b)=>{
        a.value++;
        return a.value+ b.value
    }

    const objA={
        value:25
    }
    const objB={
        value:30
    }
    console.log(`${calcObject(objA,objB )} is the result of ${objA.value} + ${objB.value}`)
})()
