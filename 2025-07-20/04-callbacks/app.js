function power2(num){
    return num**2;
}

function power3(num){
    return num**3;
}


console.log(power2(3));

console.log(power3(3));

function somePower(num, func){
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

somePower(4, power2);

somePower(4, console.log);