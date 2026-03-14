import { Pool } from 'pg'
import config from './ConfigEnv.js'


// const db = 'postgresql://neondb_owner:npg_QGWc67gxoTkI@ep-floral-rice-ai560bce-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
export const vehicleRent = new Pool({
    connectionString: config.Data_base_connect
})

const vehicleCall = async () => {
    await vehicleRent.query(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    role VARCHAR(20) NOT NULL CHECK (role IN ('Admin', 'Customer')),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    `),

    await vehicleRent.query(`
    CREATE TABLE IF NOT EXISTS vehicles (
    id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('car','bike','truck')),
    model VARCHAR(50) NOT NULL,
    registration_number VARCHAR(50) UNIQUE NOT NULL,
    rental_price_per_day NUMERIC(10,2) NOT NULL,
    availability_status VARCHAR(20) NOT NULL 
        CHECK (availability_status IN ('available','rented','maintenance')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 `),

 await vehicleRent.query(`
    CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vehicle_id INT NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    booking_status VARCHAR(20) NOT NULL 
        CHECK (booking_status IN ('pending','confirmed','completed','cancelled')),

    total_cost NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`)

}

export default vehicleCall