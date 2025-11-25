import axios from "axios";
import express, { NextFunction, Request, Response } from 'express'
import PORT from "../../app";

const port= 'http://localhost:3003'


export default async function getProfile (req: Request, res: Response, next: NextFunction){
    try {
        const axiosResponse = await axios(PORT)
        
        next()
    } catch (e) {
        next(e)
    }
}