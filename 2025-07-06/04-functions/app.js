
// //  function printSeparatorLine () {
// //     document.writeln('*******');
// //     document.write("<br");
// // }

// function printBiggerNumber(arg1, arg2){
//     // if(arg1>arg2){
//     //     console.log(arg1);
//     // }
//     // else{
//     //     console.log(arg2);
//     // }

//     console.log(arg1>arg2? arg1: arg2);
// }


// const num1= +prompt("enter a number");

// const num2= +prompt("enter a number");

// const rand1= parseInt(Math.random()*(101));

// const rand2= parseInt(Math.random()*(101));


// printBiggerNumber(num1, num2);
// printBiggerNumber(rand1, rand2);




// const num= +prompt("enter a number");

// function drewASquare(arg){

//     for(i=0; i<arg; i++)
//     {
//         for(j=0; j<arg; j++)
//         {
//             document.write("*");
//         }
//         document.write("<br>")
//     }

// }

// drewASquare(num);

// const width = +prompt("enter a width");
// const length = +prompt("enter a length");

// function drawRectangle(width, length) {

//     for (i = 0; i < length; i++) {
//         for (j = 0; j < width; j++) {
//             document.write("*");
//         }
//         document.write("<br>")
//     }

// }

// drawRectangle(width, length);

// const numbers1=[10, 45, 88, 62, 2];
// const numbers2=[80, 69, 11, 999];

// function printMaxNum(numbers){
//     let maxNum=0;

//     for (const num of numbers) {
//         if(num>maxNum) maxNum=num;
//     }

//     console.log(maxNum);

// }

// printMaxNum(numbers1);
// printMaxNum(numbers2);

// function getIsPositive(num){
//     return num>0? true: false;
// }

// const num= +prompt("enter a number");
// console.log(getIsPositive(num));


// function getAbsoluteValue(num){

//     return num<0? num*(-1): num;
// }

// const num= +prompt("enter a number");
// console.log(getAbsoluteValue(num))


let num= +prompt("enter a number");

function sevenBoom(num){
    for(i=1; i<=num; i++){
        isBoom(i);
    }
}


function isBoom (num) {
    if(num%7===0 || num.toString().includes("7")) console.log("Boom");
    else console.log(num);
};

//sevenBoom(num);

while(num!==0){
    sevenBoom(num);
    num= +prompt("enter a number");
}
    
