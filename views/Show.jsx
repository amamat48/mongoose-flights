const React = require('react')
class Show extends React.Component {
    render() {
        const { flight } = this.props
        console.log(flight)
        return (

            <div>

                <div>
                    <h1>Flight Number: {flight.flightNo}</h1>
                    <h1>Airline: {flight.airline}</h1>
                    <h1>Time of departure: {flight.departs.toISOString().split("T").join(" ").slice(0, 16)}</h1>
                    <h1>Destinations:</h1>
                    <ul>
                        {flight.destinations.map(destination => (
                            <li key={destination._id}>
                                Airport: {destination.airport}, Arrival: {destination.arrival}
                            </li>
                        ))}
                    </ul>
                    <h1>Add a destination:</h1>
                </div>
                Add a destination:
                <form action={`/flights/${flight.id}`} method="POST">
                    <label htmlFor="airport">Airport:</label>
                    <select id="airport" name="airport">
                        <option value="AUS">AUS</option>
                        <option value="DAL">DAL</option>
                        <option value="LAX">LAX</option>
                        <option value="SAN">SAN</option>
                        <option value="SEA">SEA</option>
                    </select>
                    <br />
                    <label htmlFor="arrival">Arrival Date/Time:</label>
                    <input type="datetime-local" id="arrival" name="arrival" />
                    <br />
                    <input type="submit" value="Add Destination" />
                </form>



            </div>
        )
    }
}
module.exports = Show