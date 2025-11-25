import express, { NextFunction, Request, Response } from 'express'

const app = express()

const profileRouter = express.Router()


profileRouter.use('/', getProfile)
profileRouter.delete('/', removePost)
profileRouter.post('/', newPost)
profileRouter.get('/', getPost)
profileRouter.patch('/', editPost)

export default profileRouter;