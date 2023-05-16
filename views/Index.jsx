const React = require('react');

class Index extends React.Component {
    render() {
        const { flights } = this.props;



        return (
            <div>
                {flights.map((flight) => {
                    console.log(flight.id)
                    return (
                        <div key={flight.id}>
                            <h2>{flight.airline}</h2>
                            <h4>{flight.flightNo}</h4>
                            <h4>{flight.departs.toISOString().split("T").join(" ").slice(0,16)}</h4>
                            <a href={`/flights/${flight.id}`}>Details</a>
                        </div>

                    );
                })}

            </div>
        );
    }
}

module.exports = Index



        // const updatedFlights = flights.map(flights => {
        //     const updatedDateTime = flights.departs.split('T') // updated flights = ['Date', 'Time']
        //     const newDateTime = updatedDateTime.join(' ') // joins back the array to be "'Date, 'Time'""
        //     return {
        //         ...flights,
        //         departs: newDateTime
        //     }
        // })
        // console.log(updatedFlights[0].departs)