import express, { Request, Response } from 'express'
import vehicleCall from './Config/Database.js';
import router from './Module/User/user.route.js';
import config from './Config/ConfigEnv.js';
import { vehicle_route } from './Module/Vehicle/vehicle.route.js';
import { booking_router } from './Module/Booking/booking.route.js';



const app = express()
app.use(express.json())
const port = config.Port || 3000;

vehicleCall()
app.use('/', router)
app.use('/', vehicle_route)
app.use('/',booking_router)


app.listen(port, () => {
    console.log(`Server is runing http://localhost:${port}`)
})