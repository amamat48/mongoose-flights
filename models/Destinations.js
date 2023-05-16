const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: {
            values: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
            message: '{VALUE} is not supported'
        },
        default: 'SAN'
    },
    arrival: {
        type: Date
    }

})

const Destinations = model('Destinations', destinationSchema)

module.exports = Destinations


