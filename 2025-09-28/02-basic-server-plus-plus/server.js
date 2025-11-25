
const {createServer}= require('http');
const PORT= process.env.PORT || 3000;


const users= [
    {
        id:1,
        name: 'Bob'
    },
    {
        id:2,
        name: 'Alice'
    },
    {
        id:3,
        name: 'Diana'
    }
];

const requestHandler= (request, response)=> {
  
    console.log(request.url)
    response.end(JSON.stringify(users))
}

createServer(requestHandler).listen(PORT, ()=> console.log(`server started on port ${PORT}...`));