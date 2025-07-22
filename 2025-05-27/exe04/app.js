
let num = +prompt("enter a number");
let sum=0;
let count=1;
while(num!=0)
{
    sum+=num;
    num = +prompt("enter a number");
    count++;
}

alert(sum/ count);