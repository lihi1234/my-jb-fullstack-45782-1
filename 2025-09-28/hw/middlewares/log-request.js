import express, { NextFunction, Request, Response } from 'express'


const logRequest = (req: Request, res: Response, next: NextFunction) => {
    console.log('logging request...')
    next() // this is how i let express know that i have finished running
    // and it could forward the wand to the next middleware
}

module.exports = logRequest
