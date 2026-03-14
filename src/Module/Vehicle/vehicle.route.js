import express from 'express';
import { vehicle_controll } from './vehicle.controller.js';
const router = express.Router();
router.post('/vehicle_choose', vehicle_controll.vehicle_choose);
router.get('/vehicle_choose_mark/:id', vehicle_controll.vehicle_choose_mark);
router.delete('/vehicle_delete/:id', vehicle_controll.vehicle_delete);
router.put('/vehicle_edit/:id', vehicle_controll.vehicle_edit);
router.get('/all-vehicles', vehicle_controll.all_vehicle);
export const vehicle_route = router;
