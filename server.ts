import express, { Request, Response } from 'express'
const app = express()
app.use(express.json())
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    console.log("Hello Islami World")
})

console.log("hi")