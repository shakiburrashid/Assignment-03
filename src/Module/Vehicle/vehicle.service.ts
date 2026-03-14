import { vehicleRent } from "../../Config/Database.js"

const vehicle_choose = async (vehicle_name: string, type: string, model: string, registration_number: string, rental_price_per_day: number, availability_status: string) => {
    const result = await vehicleRent.query(`INSERT INTO vehicles (vehicle_name,type,model,registration_number,rental_price_per_day,availability_status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`, [vehicle_name, type, model, registration_number, rental_price_per_day, availability_status]);
    return result
}

const vehicle_delete = async (id: string) => {
    const result = await vehicleRent.query(`DELETE FROM vehicles WHERE id = ${id} RETURNING *`)
    return result
}

const vehicle_choose_mark = async (id: string) => {
    const result = await vehicleRent.query(`SELECT * FROM vehicles WHERE id = ${id}`)
    return result
}

const vehicle_edit = async (vehicle_name: string, type: string, model: string, registration_number: string, rental_price_per_day: number, availability_status: string, id: string) => {
    const result = await vehicleRent.query(`UPDATE vehicles SET vehicle_name=$1,type=$2,model=$3,registration_number=COALESCE($4,registration_number),rental_price_per_day=$5,availability_status=$6 WHERE id=${id} RETURNING *`, [vehicle_name, type, model, registration_number, rental_price_per_day, availability_status])
    return result
}

const all_vehicle = async () => {
    const result = await vehicleRent.query(`SELECT * FROM vehicles`)
    return result
}





export const vehicle_service = {
    vehicle_choose,
    vehicle_delete,
    vehicle_edit,
    vehicle_choose_mark,
    all_vehicle
}