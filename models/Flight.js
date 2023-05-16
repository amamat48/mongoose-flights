const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const flightSchema = new Schema(
    {
        airline: {

            type: String,
            enum: {
                values: ['American', 'Southwest', 'United'],
                message: '{VALUE} is not supported'
            }


        },
        flightNo: {

            type: Number,
            required: true,
            min: 10,
            max: 9999

        },
        departs: {
            type: Date,
            default: Date.now
        },
        airport: {
            type: String,
            enum: {
                values: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
                message: '{VALUE} is not supported'
            },
            defualt: 'SAN'
        },
        destinations: [{

            type: Schema.Types.ObjectId,
            ref: 'Destinations'
        }]
    }
)

const Flights = model('Flights', flightSchema)

module.exports = Flights