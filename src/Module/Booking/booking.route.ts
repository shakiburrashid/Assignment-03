import express from 'express'
import { booking_controll } from './booking.controller.js'

const router = express.Router()

router.post('/booking-add', booking_controll.booking_add)

router.get('/booking-show-all', booking_controll.booking_all_show)

router.get('/booking-show/:id', booking_controll.booking_mark)

router.put('/booking-edit/:id', booking_controll.booking_edit)

router.delete('/booking-delete/:id', booking_controll.booking_delete)

export const booking_router = router