const React = require('react')

class New extends React.Component {
    render () {
        return (
            <div>
                <form action='/' method='POST'>
                    Name: <input type='text' name='airline' /> <br />
                    FLight Number: <input type='number' name='flightNo' /> <br />
                    Time of departure: <input type="datetime-local" name='departs'/> <br />
                    <select name='airport'>
                        <option value='SAN'>SAN</option>
                        <option value='DAL'>DAL</option>
                        <option value='AUS'>AUS</option>
                        <option value='LAX'>LAX</option>
                        <option value='SEA'>SEA</option>
                    </select>
                    <input type="submit" name="" value="Create Flight"/>
                </form>

            </div>
        )
    }
}
module.exports = New