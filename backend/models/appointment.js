const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    start: {
        type: Number,
        required: true,
    },

    end: {
        type: Number,
        required: true,
    },

    comment: {
        type: String,
    },

    startDate: {
        type: String,
        required: true,
    },

    startTime: {
        type: String,
        required: true,
    },

    endDate: {
        type: String,
        required: true,
    },

    endTime: {
        type: String,
        required: true,
    },

    duration: {
        type: Number,
        required: true
    }
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment