const React = require('react')

class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.log
        return (
            <>
                <h1>Edit This Entry</h1>
                <nav>
                    <a href="/logs"> Go Back To Log Home Page</a>
                </nav>
                <form action={`/logs/${_id}?_method=PUT`} method="POST">
                    <input type="text" name="title" defaultValue={title}></input><br/>
                    <input type="text" name="entry" defaultValue={entry}></input><br/>
                    <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}></input><br/>
                    <input type="submit" vaule="Submit Changes"></input><br/>
                </form>
            </>
        )
    }
}



module.exports = Edit 