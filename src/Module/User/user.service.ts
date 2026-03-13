import vehicleCall, { vehicleRent } from "../../Config/Database.js"

// account created
const createUser = async (name: string, role: string, email: string, password: string, phone_number: string) => {
    const result = await vehicleRent.query(`INSERT INTO users (name,role,email,password,phone_number) VALUES ($1,$2,$3,$4,$5) RETURNING *`, [name, role, email, password, phone_number])
    return result
}

// account show
const account_show = async () => {
    const result = await vehicleRent.query(`SELECT * FROM users`);
    return result
}

// user account show
const user_accouts = async (id: string) => {
    const result = await vehicleRent.query(`SELECT * FROM users WHERE id=${id}`);
    return result
}


const account_edit = async (name: string, email: string, password: string, phone_number: string, id: string) => {
    const result = await vehicleRent.query(`UPDATE users set name=$1,email=COALESCE($2,email),password=$3,phone_number=$4 WHERE id=${id} RETURNING *`, [name, email, password, phone_number])
    return result
}

const account_delete = async (id: string) => {
    const result = await vehicleRent.query(`DELETE FROM users where id=${id} RETURNING *`)
    return result
}


export const userService = {
    createUser,
    account_show,
    user_accouts,
    account_edit,
    account_delete
}