const sayHello= ()=> console.log('hello');

const doSomething= callback=> callback();

doSomething(sayHello)

const sum=(a, b, c)=> console.log(a + b + c)

const divide =(a, b) =>  a / b
    
const isNegative = num=> {
    if (num < 0) {
        console.log('negative')
        return true
    }
    return false
}