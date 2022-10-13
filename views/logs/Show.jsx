const React = require('react')

class Show extends React.Component{
    render(){
        const {title, entry, shipIsBroken, _id} = this.props.log
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return(
            <>
                <h1> {capTitle} Show Page</h1>
                    <nav>
                        <a href='/logs'>Back to Home Page</a>
                        {/* <a href={`/logs/${_id}/edit`}>{`Edit the ${capName}`}</a> */}
                    </nav>
                <p>{capTitle} ""
                {shipIsBroken?
                    `Is Broken`:
                    `Is not Broken`} ""
                logged on {entry}</p>
            </>
        )
    }
}

module.exports = Show 