const express = require("express")
const cors = require("cors")
require('dotenv').config()

const app = express()
const port: number = Number(process.env.PORT) || 3000;

app.use(cors())

app.listen(port, () => {
    console.info(`App listening on port ${port}`)
})
