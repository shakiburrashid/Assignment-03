import express, { Request, Response } from 'express'
import vehicleCall from './src/Config/Database.js';
import router from './src/Module/User/user.route.js';
import config from './src/Config/ConfigEnv.js';



const app = express()
app.use(express.json())
const port = config.Port || 3000;

vehicleCall()
app.use('/', router)

app.listen(port, ()=> {
    console.log(`Server is runing http://localhost:${port}`)
})