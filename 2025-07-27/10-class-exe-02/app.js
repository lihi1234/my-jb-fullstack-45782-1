"use strict";

(() => {

   const randNum= (callback, max)=>{

      const rand= Math.random()*max;
      //console.log(rand)
      setTimeout(callback(rand), 1000)
       
   }
   let num=100;
   
      
      randNum((rand)=>{num= rand}, num);
      console.log(num)
      randNum((rand)=>{num= rand}, num);
      console.log(num)
      
   
   //console.log(num);
})()
