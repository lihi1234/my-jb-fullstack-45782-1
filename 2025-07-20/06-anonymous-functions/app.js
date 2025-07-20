

function somePower(num, func) {
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

somePower(4, function (num) { return num ** 2; });

somePower(4, function (num) { return num ** 3; });

somePower(4, console.log)