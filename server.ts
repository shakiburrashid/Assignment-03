import express, { Request, Response } from 'express'
import vehicleCall from './src/Config/Database.js';
import router from './src/Module/User/user.route.js';
import config from './src/Config/ConfigEnv.js';
import { vehicle_route } from './src/Module/Vehicle/vehicle.route.js';



const app = express()
app.use(express.json())
const port = config.Port || 3000;

vehicleCall()
app.use('/', router)
app.use('/', vehicle_route)
app.listen(port, () => {
    console.log(`Server is runing http://localhost:${port}`)
})