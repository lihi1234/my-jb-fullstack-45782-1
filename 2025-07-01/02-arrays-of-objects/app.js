const ido = {
    name: 'ido',
    city: 'rosh haayin',
    grades: [98, 56, 78]
};

const lior = {
    name: 'lior',
    city: 'arsuf ilit',
    grades: [88, 66, 99]
};

const itay = {
    name: 'itay',
    city: 'haifa',
    grades: [87, 68, 95]
};

const students = [ido, lior, itay];

// let sum = 0;
// let numOfGrades=0;

// for (const student of students) {
//    // for (const prop in student) {
//      //   if (prop === 'grades' ) {
//             for (const grade of student.grades) {
//                 sum+=grade;
//                 numOfGrades++;
//             }
//        // }

//     //}
// }
// console.log(sum/numOfGrades);

let maxGrade=0;
let minGrade=100;
let maxStu='';
let minStu='';


for (const student of students) {
    for (const grade of student.grades){
        if(grade>maxGrade)
        {
            maxGrade=grade;
            maxStu= student.name;
        }
        if(grade<minGrade){
            minGrade=grade;
            minStu= student.name;
        }
    }
    
}

console.log(`the highest grade is ${maxGrade} of ${maxStu}`)
console.log(`the lowest grade is ${minGrade} of ${minStu}`)
