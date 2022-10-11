const React = require('react')

class New extends React.Component {
    render(){
        return(
            <>
            <h1>Captain's Entry</h1>
            <form method='POST' action='/logs'>
                Title:<input type='text' name='title'></input><br/>
                Entry:<input type='textarea' name='entry'></input><br/>
                Is Ship Broken<input type='checkbox' name='shipIsBroken'></input><br/>
                <input type='submit'></input>
            </form>
            </>
        )
    }
}

module.exports = New