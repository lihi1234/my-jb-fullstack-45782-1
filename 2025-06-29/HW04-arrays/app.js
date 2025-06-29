const numbers=[];
let sum=0;
let odd=0;
let max=0;
let min=100;
let average=0;
let lessThanAverage=0;
for(let i=0; i<100; i++)
{
    numbers.push(parseInt(Math.random()*100)+1 );
}

for(const num of numbers){
    document.writeln(`${num} | `);
    sum+=num;
    if(num>max)
        max=num;
    if(num<min)
        min=num;
}
document.writeln(`<br> <br>`);
for(let i=numbers.length-1; i>=0; i--){
    document.writeln(`${numbers[i]} , `);
}
document.writeln(`<br> <br>`);
document.writeln(`the summary of all the numbers is : ${sum}`);
document.writeln(`<br> <br>`);
average=sum/numbers.length;
document.writeln(`the average of all the numbers is : ${average}`);


document.writeln(`<br> <br>`);
for(const num of numbers){
    if(num%2==0){
        document.writeln(`${num} ,`);
    }
    else
        odd++;

}

document.writeln(`<br> <br>`);

document.writeln(`there are ${odd} odd numbers`);

document.writeln(`<br> <br>`);
document.writeln(`the maximum number is ${max}`);

document.writeln(`<br> <br>`);
document.writeln(`the minimum number is ${min}`);

document.writeln(`<br> <br>`);

for(const num of numbers){
    if(num>average)
        document.writeln(`${num} ,`);
    else
    lessThanAverage++;
}

document.writeln(`<br> <br>`);

document.writeln(`there are ${lessThanAverage} numbers that less than the average`);



