"use strict";
(async () => {

    const numOfCandels = day =>
        new Promise ((resolve, reject)=>{
            setTimeout(() => {
                if (day > 0 && day < 9) resolve(day+1)
                else reject('enter num between 1 to 8')
            }, 1000)})







// numOfCandels(7, console.log, console.log)
// numOfCandels(0, console.log, console.log)

// Promise.allSettled([numOfCandels(6),numOfCandels(0) ])
// .then(console.log)
// .catch(console.error)

let sum = await numOfCandels(1);
sum+= await numOfCandels(2);
sum+= await numOfCandels(3);
sum+= await numOfCandels(4);
sum+= await numOfCandels(5);
sum+= await numOfCandels(6);
sum+= await numOfCandels(7);
sum+= await numOfCandels(8);

console.log(sum);




//   try{
//       console.log(numOfCandels(6))
//     console.log(numOfCandels(0))
//   }
//   catch(err){
//     console.error(err)
//   }



}) ()