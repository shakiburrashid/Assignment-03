import { Request, Response } from "express";
import { userService } from "./user.service.js";

// Account Created
const createAccount = async (req: Request, res: Response) => {
    try {
        const { name, role, email, password, phone_number } = req.body;
        const result = await userService.createUser(name, role, email, password, phone_number)
        res.status(201).json({
            success: true,
            message: "Account  Succesfully  created",
            data: result.rows[0]

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Account Show
const account_show = async (req: Request, res: Response) => {
    try {
        // const {name,role,email,password,phone_number} = req.body;
        const result = await userService.account_show()
        res.status(201).json({
            success: true,
            message: "Accounts below",
            data: result.rows

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// users Account Show
const users_account = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await userService.user_accouts(id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: true,
                message: "Accounts doesn't exists",

            })
        } else {
            res.status(200).json({
                success: true,
                message: "Your Account",
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

const account_edit = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { name, email, password, phone_number } = req.body
        const result = await userService.account_edit(name, email, password, phone_number, id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Accout doesn't exist"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Account Successfully edited",
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


const account_delete = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await userService.account_delete( id as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Accout doesn't exist"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Account Successfully delete",
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






export const userControll = {
    createAccount,
    account_show,
    users_account,
    account_edit,
    account_delete
}