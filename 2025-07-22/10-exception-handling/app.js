const numOfDigits = +prompt('how many digits')
const PI = Math.PI;


try {
    console.log(PI.toFixed(numOfDigits));
}
catch (err) {
    if(err.message.includes('between 0 and 100')) alert('enter between 0 to 100')

}

finally{
    
}



