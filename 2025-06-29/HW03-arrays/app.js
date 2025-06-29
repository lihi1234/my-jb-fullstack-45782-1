const grades = [];
let flag = 1;

for (let i = 0; i < 10; i++) {
    grades.push(+prompt(`enter a grade`));
}

for (const grade of grades) {

    if (grade < 0 || grade > 100) {
        flag = 0;
        document.writeln(`${grade} , `);
    }

}

if (flag === 1) {
    document.writeln(`all the grades are valid`);
}
else
    document.writeln(`all the grades are not valid`);
