const React = require('react')
const Default = require('./layouts/Default')

class New extends React.Component {
    render(){
        return(
            <Default title='Create A New Entry'>
            <form method='POST' action='/logs'>
                Title:<input  name='title'></input><br/>
                Entry:<input name='entry'></input><br/>
                Is Ship Broken:<input type='checkbox' name='shipIsBroken'></input><br/>
                <input type='submit'></input>
            </form>
            </Default>
        )
    }
}

module.exports = New