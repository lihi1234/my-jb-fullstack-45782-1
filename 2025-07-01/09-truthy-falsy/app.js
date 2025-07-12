// const age= 16;

// const isAdult= age>18;

// console.log(typeof isAdult)

// const weight= "48"

// if(weight) console.log()

// let message="hello"

// message.pu

// const message= prompt("enter a few words");

// let whiteSpaceInd= message.indexOf(" ");

// const firstWord=message.substring(0, whiteSpaceInd);

// console.log(firstWord.toLocaleUpperCase());

// whiteSpaceInd=message.lastIndexOf(" ");

// const lastWord= message.substring(whiteSpaceInd+1, message.length);

// console.log(lastWord.toLocaleUpperCase());

const mat=[
    [2,5,9],
    [1,6,8],
    [5,9,8]
]
let sum=0;

for (const element of mat) {

    for (const num of element) {
        sum+=num;
    }
    
}

// for(let i=0; i<3; i++)
// {
//     for(let j=0; j<3; j++)
//     {
//         sum+=mat[i][j];
//     }
// }

console.log(sum);