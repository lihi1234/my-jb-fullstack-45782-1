const numbers=[];


for(let i=0; i<20; i++)
{
    const random= Math.random();
    numbers.push((parseInt(random*(201))-100));
    
}
let isBingo=false;
const userNum= +prompt('enter a number betweem -100 to 100');

for(let num of numbers){
    if(num===userNum)
    {
        isBingo=true;
    }
}

if(isBingo===false){
    console.log(`Bingo`);
}
else{
    console.log(`not bingo`);
}
