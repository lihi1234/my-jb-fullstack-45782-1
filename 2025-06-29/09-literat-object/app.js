// const dogName= 'betty';
// const dogAge= 3;
// const dogBreed= 'mixed';
// const dogGender= 'female';
// const dogWeight= 20;

// const dog= {
//     name:'Betty',
//     age:3,
//     breed: 'mixed',
//     gender: 'female',
//     weight: 20
// }

// for(const property in dog)
// {
//     console.log(dog[property]);
// }

// const employee=
// {
//     firstName: `adam`,
//     lastName: `cohen`,
//     salary: 10000
// }

// document.writeln(`${employee.firstName}`);
// document.writeln(`${employee.lastName}`);
// document.writeln(`${employee.salary}`);

// employee.address='Israel';

// delete employee.lastName;

// for( const prop in employee)
// {
//     document.writeln(employee[prop]);
// }


const book={
    author: `adam cohen`,
    publish: 'mishu',
    pages:200,
    price: 80
}

book.price= book.price*0.8;

document.writeln(`the price after discount is ${book.price}`);