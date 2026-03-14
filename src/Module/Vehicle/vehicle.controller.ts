import { Request, Response } from "express";
import { vehicle_service } from "./vehicle.service.js";

const vehicle_choose = async (req: Request, res: Response) => {
    try {
        const { vehicle_name, type, model, registration_number, rental_price_per_day, availability_status } = req.body
        const result = await vehicle_service.vehicle_choose(vehicle_name, type, model, registration_number, rental_price_per_day, availability_status)
        res.status(201).json({
            success: true,
            message: "Successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const vehicle_choose_mark = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await vehicle_service.vehicle_choose_mark(id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Doesn't exist",
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Successfully get",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}



const vehicle_delete = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await vehicle_service.vehicle_delete(id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Doesn't exist",
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Successfully Deleted",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const vehicle_edit = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { vehicle_name, type, model, registration_number, rental_price_per_day, availability_status } = req.body
        const result = await vehicle_service.vehicle_edit(vehicle_name, type, model, registration_number, rental_price_per_day, availability_status, id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Doesn't exist",
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Successfully edited",
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


const all_vehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehicle_service.all_vehicle()
        res.status(201).json({
            success: true,
            message: "Successfully",
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
























export const vehicle_controll = {
    vehicle_choose,
    vehicle_choose_mark,
    vehicle_delete,
    vehicle_edit,
    all_vehicle
}