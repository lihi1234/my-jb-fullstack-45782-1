let random= Math.random();// 0-0.9999

// console.log(parseInt(random*100));// 0-99

// console.log(parseInt(random*100)+1);

//1

// console.log((parseInt(random)*50)+1);

// 2
//console.log((parseInt(random*21))+10);

const min= +prompt("enter minimum");
const max= +prompt("enter maximum");



for(let i=0; i<100; i++)
{
    console.log((parseInt(random*(max-min+1))+min));
    random= Math.random();
}

