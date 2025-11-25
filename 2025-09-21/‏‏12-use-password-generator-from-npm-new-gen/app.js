const generator= require('password-generator-npm-lihi-barlev')
console.log(`your new password is: ${generator(+process.argv[2],true)}`)