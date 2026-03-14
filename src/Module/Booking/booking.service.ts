import { vehicleRent } from "../../Config/Database.js";

const booking_add = async (user_id:number,vehicle_id:number,start_date:Date,end_date:Date,booking_status:string,total_cost:number) => {
    const result = await vehicleRent.query(`INSERT INTO bookings (user_id,vehicle_id,start_date,end_date,booking_status,total_cost) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`, [user_id,vehicle_id,start_date,end_date,booking_status,total_cost]);
    return result
}

const booking_all_show = async()=>{
    const result = await vehicleRent.query(`SELECT * FROM bookings`)
    return result
}

const booking_mark= async(id:string)=>{
    const result = await vehicleRent.query(`SELECT * FROM bookings WHERE id=${id}`)
    return result
}

const booking_edit = async(user_id:number,vehicle_id:number,start_date:Date,end_date:Date,booking_status:string,total_cost:number,id:string)=>{
const result = await vehicleRent.query(`UPDATE bookings SET user_id=$1, vehicle_id=$2, start_date=$3,end_date=$4,booking_status=$5,total_cost=$6 WHERE id=${id} RETURNING *`, [user_id,vehicle_id,start_date,end_date,booking_status,total_cost]);
    return result
}

const booking_delete= async(id:string)=>{
    const result = await vehicleRent.query(`DELETE FROM bookings WHERE id=${id} RETURNING *`)
    return result
}


export const bookings_service = {
    booking_add,
    booking_all_show,
    booking_mark,
    booking_edit,
    booking_delete
}