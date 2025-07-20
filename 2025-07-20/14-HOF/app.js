const students = [
    {
        name: 'Dean',
        grade: 95,
        age: 21
    },

    {
        name: 'Michael',
        grade: 92,
        age: 36,
        gender: 'male'

    },

    {
        name: 'Ruth',
        grade: 88,
        age: 29,
        gender: 'female'
    }
]

let student;
const findStu = name => {
    for (const currentStudent of students) {
        if (currentStudent.name === name) {
            return currentStudent
        }

    }
    return undefined;
}

console.log(findStu('Ruth'))

students.find((currentStu)=> {currentStu==='Ruth'})
