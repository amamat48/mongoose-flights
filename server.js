const express = require('express')
port = 3000
const app = express()

// connect Database
const connectDB = require('./config/database')

connectDB()

// Import model
const Flights = require('./models/Flight')
const Destinations = require('./models/Destinations')

// Middleware

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

//ROUTES

// INDEX
app.get('/', async (req, res) => {

    try {
        const flights = await Flights.find({})
        res.render('Index', { flights: flights })
    } catch (error) {
        console.error(error)
    }

})



// NEW

app.get('/flights/new', (req, res) => {
    res.render('New')
})

// Update

app.post('/flights/:id', async (req, res) => {
    try {
        const flightId = req.params.id
        const { airport, arrival } = req.body

        // Create a new Destination document
        const newDestination = await Destinations.create({ airport, arrival })

        // Find the corresponding Flight document and update it
         await Flights.findByIdAndUpdate(
            flightId,
            { $push: { destinations: newDestination.id } }, // pushes the new destination to the array in the database
            { new: true }
        ).populate("destinations")

        res.redirect(`/flights/${flightId}`) // Redirect to the flight details page
    } catch (error) {
        console.error(error);
    }
})


// CREATE

app.post('/', async (req, res) => {
    try {
        await Flights.create(req.body)
        res.redirect('/')

    } catch (error) {
        console.error(error)
    }

})





// Show

app.get('/flights/:id', async (req, res) => {
    try {
        const flight = await Flights.findById(req.params.id)
        res.render('Show', { flight: flight })
    } catch (error) {
        console.error(error)
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})