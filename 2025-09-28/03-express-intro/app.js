const express = require('express')
const { toXML } = require('jstoxml')
const axios= require ('axios')



const PORT = process.env.PORT || 3003


const errorResponder = (err, request, response, next) => {
    response.status(err.status || 500).send(err || 'internal server error...')
}





const handleGetUsers= async (req, res, next)=>{
    try{
        const response= await axios('https://dummyjson.com/users');
        const users= response.data;

        res.json(users);
    }
    catch(e){
        next(e)
    }
    
}
const notFound = (request, response, next) => {
    response.status(404).send('yo bro, what u want is not here... with accent')
}
const app = express()


app.get('/users', handleGetUsers)


// not found 404 middleware
app.use(notFound)

// // error middlewares
// app.use(errorLogger)
// app.use(pagerDuty)
app.use(errorResponder)

app.listen(PORT, () => console.log(`server started on port ${PORT}...`))