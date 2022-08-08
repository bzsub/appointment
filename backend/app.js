const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const appointmentRoutes = require('./routes/appointments')
app.use('/api/appointments',appointmentRoutes)

module.exports = app