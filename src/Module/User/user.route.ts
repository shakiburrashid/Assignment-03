
import express from 'express'
import { userControll } from './user.controller.js'

const router = express.Router()

router.post('/user',userControll.createAccount)

router.get('/accounts_get',userControll.account_show)

router.get('/users_account/:id',userControll.users_account)




export default router