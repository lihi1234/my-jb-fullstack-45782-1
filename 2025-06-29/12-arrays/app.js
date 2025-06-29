// const grades= [98, 67, 80, 82, 95];

// console.log(grades);

// //console.log(grades[0]);

// delete grades[3];

// console.log(grades);

// const salaries = [10000, 12000, 15000, 8000, 9000, 7000, 10000, 20000, 9000, 10500];
// let sum = 0;
// let maxSal = 0;
// for (const salary of salaries) {
//     document.writeln(salary);
//     sum += salary;
//     if (salary > maxSal) {
//         maxSal = salary;
//     }
// }

// document.writeln(sum / salaries.length);
// document.writeln(maxSal);

// const grades= [];

// for( let count=1; count<=5; count++){
    
//     grades.push(+prompt('please enter grade'));
// }

// console.log(grades);



 const nums=[];

 for(let i=0; i<20; i++)
 {
    nums.push(parseInt((Math.random()*61)+20));
    
 }

 for(const num of nums)
 {
    console.log(num);
 }

