const React = require('react')
const Default = require('./layouts/Default')

class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.log
        return (
            <Default title={`${title} Edit Page`} log={this.props.log}>
                <form action={`/logs/${_id}?_method=PUT`} method="POST">
                    <input type="text" name="title" defaultValue={title}></input><br/>
                    <input type="text" name="entry" defaultValue={entry}></input><br/>
                    <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}></input><br/>
                    <input type="submit" vaule="Submit Changes"></input><br/>
                </form>
            </Default>
        )
    }
}



module.exports = Edit 