import { Pool } from 'pg'
const db = 'postgresql://neondb_owner:npg_QGWc67gxoTkI@ep-floral-rice-ai560bce-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'


export const vehicleRent = new Pool({
    connectionString: db
})

const vehicleCall = async () => {
    await vehicleRent.query(``)
}

export default vehicleCall