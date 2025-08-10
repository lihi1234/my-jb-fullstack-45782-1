"use strict";
(()=>{

    //this
    // a special var in js' its value depends on the 
    // current context
   document.getElementById("my-button").addEventListener("click",function (){
    console.log(this)

   })

})()

