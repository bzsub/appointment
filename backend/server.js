require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    })
    .catch(err => console.log(err))

