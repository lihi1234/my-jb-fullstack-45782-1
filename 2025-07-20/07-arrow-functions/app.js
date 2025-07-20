

const somePower = (num, func) => {
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

somePower(4, (num) => { return num ** 2; });

somePower(4, num => { return num ** 3; });


somePower(4, num => console.log(num ** 3));

somePower(4, num => num ** 3);

somePower(4, console.log)

const power2 = num => num ** 2;

const multiply = (a, b) => a * b;