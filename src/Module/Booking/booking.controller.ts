import { Request, Response } from "express"
import { bookings_service } from "./booking.service.js"

const booking_add = async (req: Request, res: Response) => {
    try {
        const { user_id, vehicle_id, start_date, end_date, booking_status, total_cost } = req.body
        const result = await bookings_service.booking_add(user_id, vehicle_id, start_date, end_date, booking_status, total_cost)
        res.status(201).json({
            success: true,
            message: "Successfully added",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const booking_all_show = async (req: Request, res: Response) => {
    try {
        const result = await bookings_service.booking_all_show()
        res.status(201).json({
            success: true,
            message: "Successfully added",
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const booking_mark = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await bookings_service.booking_mark(id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Doesn't exist"
            })
        } else {
            res.status(201).json({
                success: true,
                message: "Successfully",
                data: result.rows
            })
        }


    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}




const booking_edit = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { user_id, vehicle_id, start_date, end_date, booking_status, total_cost } = req.body
        const result = await bookings_service.booking_edit(user_id, vehicle_id, start_date, end_date, booking_status, total_cost, id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Doesn't exist"
            })
        } else {
            res.status(201).json({
                success: true,
                message: "Successfully edit",
                data: result.rows
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}


const booking_delete = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await bookings_service.booking_delete(id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Doesn't exist"
            })
        } else {
            res.status(201).json({
                success: true,
                message: "Successfully",
                data: result.rows
            })
        }


    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}


export const booking_controll = {
    booking_add,
    booking_all_show,
    booking_mark,
    booking_edit,
    booking_delete
}