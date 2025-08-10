"use strict";
(()=>{
    // const myGrades= new Set();
    // myGrades.add(90);
    // myGrades.add(95)
    // myGrades.add(100)

    // console.log(myGrades)

    // myGrades.has(100)

    const grades= [78, 82,88,88,90,92, 92, 96, 96, 96 , 96, 100];
console.log(
    grades.reduce((cumulative, grade)=>{
        const newGrades= [...cumulative];
        if(!cumulative.includes(grade))
            newGrades.push(grade);
        return newGrades;
    }, []))
    const gradesSet= new Set(grades);

    const newArr= [...gradesSet]
    console.log(newArr)

})()

