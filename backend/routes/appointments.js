const router = require('express').Router()
const Appointment = require('../models/appointment')
const mongoose = require('mongoose')

//get all appointments
router.get('/', async (req, res) => {
    const lengthOfPage = 10;
    const page = req.query.page > 0 ? req.query.page - 1 : 0;
    const filter = {};
    if (req.query.date) filter.startDate = req.query.date
    const appointments = await Appointment.find(filter,'',{skip: page * lengthOfPage, limit: lengthOfPage});
    res.json(appointments);
})


//get one appointment with :id
router.get('/:id', async (req, res) => {
    if( !mongoose.Types.ObjectId.isValid(req.params.id) ) return res.sendStatus(400);
    const appointment = await Appointment.findOne({_id: req.params.id});
    if (!appointment) return res.sendStatus(400);
    res.json(appointment);
})

//create appointment
router.post('/', async (req, res) => {
    const now = + new Date();
    if ( !req.body.start || !req.body.end || req.body.start >= req.body.end || req.body.start*1000 <= now || req.body.start + 30*60 <= req.body.end) return res.sendStatus(400);
    const after = await Appointment.find({start: { $gt: req.body.start,$lt: req.body.end}});
    const before = await Appointment.find({end: { $gt: req.body.start,$lt: req.body.end}});
    if (after.length > 0 || before.length > 0) return res.sendStatus(418);
    const appointment = await Appointment.create({
        start: req.body.start,
        end: req.body.end,
        startDate: new Date(req.body.start*1000).toISOString().split('T')[0],
        endDate: new Date(req.body.end*1000).toISOString().split('T')[0],
        startTime: new Date(req.body.start*1000).toTimeString().split(' ')[0],
        endTime: new Date(req.body.end*1000).toTimeString().split(' ')[0],
        comment: new Date(req.body.start*1000),
        duration: req.body.end - req.body.start
    });
    res.json(appointment.id);
})

//delete appointment with :id
router.delete('/:id', async (req, res) => {
    if( !mongoose.Types.ObjectId.isValid(req.params.id) ) return res.sendStatus(400);
    const del = await Appointment.findByIdAndDelete({_id: req.params.id});
    if (!del) return res.sendStatus(400);
    res.sendStatus(200);
})


//delete all
router.delete('/', async (req, res) => {
    const del = await Appointment.deleteMany();
    if (!del) return res.sendStatus(400);
    res.sendStatus(200);
})



module.exports = router 