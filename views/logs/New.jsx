const React = require('react')

class New extends React.Component {
    render(){
        return(
            <>
            <h1>Captain's Entry</h1>
            <a href="/logs">Back to Entries Log</a>
            <form method='POST' action='/logs'>
                Title:<input  name='title'></input><br/>
                Entry:<input name='entry'></input><br/>
                Is Ship Broken:<input type='checkbox' name='shipIsBroken'></input><br/>
                <input type='submit'></input>
            </form>
            </>
        )
    }
}

module.exports = New