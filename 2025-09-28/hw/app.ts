import express, { NextFunction, Request, Response } from 'express'
import profileRouter from './routers/profile'





const PORT = process.env.PORT || 3003

const app = express()
// const usersRouter = require('./routers/users')
// const productsRouter = require('./routers/products')
// const errorLogger = require('./middlewares/error/logger')
// const pagerDuty = require('./middlewares/error/pager-duty')
// const errorResponder = require('./middlewares/error/responder')
// const notFound = require('./middlewares/not-found')
// const logRequest = require('./middlewares/log-request')

app.use('/', profileRouter)

app.use('/profile', profileRouter)
// app.use('/products', productsRouter)


// not found 404 middleware
// app.use(notFound)

// error middlewares
// app.use(errorLogger)
// app.use(pagerDuty)
// app.use(errorResponder)

app.listen(PORT, () => console.log(`server started on port ${PORT}...`))

export default PORT;