import dotenv from 'dotenv'
import path from 'node:path'

dotenv.config({path:path.join(process.cwd(),'.env')})

const config = {
    Data_base_connect: process.env.DB,
    Port: process.env.PORT

}

export default config