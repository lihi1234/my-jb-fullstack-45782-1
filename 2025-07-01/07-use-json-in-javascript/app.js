const studentsJson =
    `[
    {
        "name": "ido",
        "city": "tel aviv",
        "grades": [98, 87, 75],
        "age": 20
    }
]`

console.log(studentsJson);

const students= JSON.parse(studentsJson);


students[0].age++;

console.log(students);

const modifiedJson= JSON.stringify(students);

console.log(modifiedJson)