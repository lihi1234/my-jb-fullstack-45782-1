"use strict";

(() => {

   const colors=['red', 'green', 'yellow', 'orange'];

  
  const pickColor=(callback)=>{
   setTimeout(()=>{
      const rand=parseInt(Math.random()*colors.length);
 
      const randomColor= colors[rand];
      callback(randomColor)
   }, 3000)
  }
  document.getElementById('change-btn').addEventListener('click', ()=>{ 
   
  pickColor(color=>{
 document.body.style.backgroundColor= color
   })});


})()
