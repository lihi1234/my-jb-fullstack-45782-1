function showSomething(something){
    console.log(`something is ${something}`);
    console.log(`something type is ${ typeof something}`);
}

const name=`lihi`;

showSomething(name);
showSomething(100);

showSomething(showSomething);

showSomething(console.log);
